import "./Displaymenu.css";
import { menu_list } from "../../../assets/Assets";
const Displaymenu = ({ category, setcategory }) => {
  return (
    <div className="displaymenu" id="displaymenu">
      <div className="display_contents">
        <h1 className="display_heading">Our Food Items </h1>
        <p className="display_para">
          has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>
      </div>
      <div className="display_content">
        {menu_list.map((items, index) => {
          return (
            <div
              key={index}
              className="display_items"
              onClick={() =>
                setcategory((pres) =>
                  pres === items.menu_name ? "all" : items.menu_name
                )
              }
            >
              <img
                className={`display_image ${
                  category === items.menu_name ? "active" : ""
                }`}
                src={items.menu_image}
                alt="display_images"
              />
              <p>{items.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Displaymenu;
