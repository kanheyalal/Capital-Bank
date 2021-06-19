import classes from "./Layout.module.css";
import Header from "../header/Header";
import Footer from "./Footer";

const Layout = (props) => {
    return <div className={classes.main}>

        <Header className={classes.header} /> 
        <div className={classes.content}>
            {props.children}
        </div>
        <Footer className={classes.footer}/>
        
    </div>
};

export default Layout;