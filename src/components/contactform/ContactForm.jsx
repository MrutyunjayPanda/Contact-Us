import styles from "./ContactForm.module.css";
import Button from "../buttons/Buttons";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

function ContactForm() {
  return (
    <section className={styles.form}>
      <div className={styles.input}>
        <div className={styles.outline}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiOutlineMail fontSize="24px" />}
        />

        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="Name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="email" rows="9" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_img}>
        <img src="/images/service.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
