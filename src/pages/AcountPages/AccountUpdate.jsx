import 'tailwindcss/tailwind.css';
import {useEffect, useState} from "react";
import {fetchData} from "../../utils/helpers.js";
import {developmentSevers} from "../../services/api.js";
import VendorView from "./VendorView.jsx";
import CustomerView from "./CustomerView.jsx";
import {usePopup} from "../../context/PopupContext.jsx";

export default function AccountUpdate() {
  const token = localStorage.getItem('byose_client_token');
  const { showPopup } = usePopup();
  const [user, setUser] = useState({});
  const [vendor, setVendor] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(true);
  useEffect( () => {
    async function main() {
      try {
        setLoader(true)
        const result = await fetchData(`${developmentSevers.activities}/api/account`, token);
        if (result.error) {
          showPopup(result.error,"#00ff00","#fff");
        } else {
          setUser(result.data.user);
          if(result.data.vendor)
            setVendor(result.data.vendor);
        }
      } catch (error) {
        showPopup(error.message,"#00ff00","#fff");
      }finally {
        setLoader(false)
      }
    }
    main();
  }, []);
  return (
    <div className="container mx-auto p-6">
      {user.role==="VENDOR"?
          <VendorView user={user} vendor={vendor} className={``}/>:
          <CustomerView user={user} className={``}/>
      }
    </div>
  );
}
