import { 
  faTrash, 
  faSignOutAlt, 
  faEdit, 
  faCirclePlus,
  faPhone,
  faEnvelope,
  faBars,
  faXmark,
  faCartFlatbed,
  

} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
  return library.add(
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faCirclePlus, 
    faPhone, 
    faEnvelope, 
    faBars,
    faXmark,
    faCartFlatbed,

   

  );
};


export default Icons;