import classes from "./Contact.module.css";

const Contact = () => {
    return <div className={classes.contact}>
        <div className={classes.content}>
            <div className={classes.info}><i className={`fa fa-map-marker ${classes.icon}`} aria-hidden="true"></i>Parvati Kunj, 32 Bhagat Road, Mahim, Mumbai, Maharashtra, 400016</div>
            <div className={classes.info}><i className={`fa fa-phone ${classes.icon}`} aria-hidden="true"></i>1800-304-8989</div>
            <div className={classes.info}><i className={`fas fa-envelope ${classes.icon}`}></i>capital.info@outlook.com</div>
            <div className={classes.info}><i className={`fas fa-clock ${classes.icon}`}></i>MON-FRI 9:00AM-5:00PM</div>
        </div>
    </div>
};

export default Contact;