import { FunctionComponent } from "react";
import styles from "./RequestCallback.module.css";

const RequestCallback: FunctionComponent = () => {
  return (
    <div className={styles.requestCallback}>
      <div className={styles.bg} />
      <div className={styles.bg1} />
      <img
        className={styles.prettySmilingLadyTransperenIcon}
        alt=""
        src="/prettysmilingladytransperentglasseswidesmilewhiteshirtwithheadsetisolatedwhitephotoroom-1@2x.png"
      />
      <div className={styles.requestCallbackParent}>
        <b className={styles.requestCallback1}>
          <span>{`Request `}</span>
          <span className={styles.callback}>Callback</span>
        </b>
        <div className={styles.btnParent}>
          <div className={styles.btn}>
            <div className={styles.requestCallback2}>request callback</div>
            <img className={styles.btnChild} alt="" src="/arrow-1@2x.png" />
          </div>
          <div className={styles.checkmark}>
            <div className={styles.boxParent}>
              <div className={styles.box} />
              <img
                className={styles.checkmarkIcon}
                alt=""
                src="/checkmark@2x.png"
              />
            </div>
            <div className={styles.iAuthorizeEsteeContainer}>
              <span>{`I authorize Estee Advisors Pvt. Ltd. to contact me. This will override registry on the NDNC. `}</span>
              <span className={styles.asPerSebi}>
                As per SEBI guide Lines, minimum investment required is of ₹50
                Lakhs.
              </span>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.lookingToInvestInRs}>
              <div className={styles.bgParent}>
                <div className={styles.bg2} />
                <img
                  className={styles.dropdownIcon}
                  alt=""
                  src="/dropdown@2x.png"
                />
                <div className={styles.select}>Select</div>
              </div>
              <div className={styles.lookingToInvest}>
                Looking to invest (In Rs.)
              </div>
            </div>
            <div className={styles.mobileNo}>
              <div className={styles.bgParent}>
                <div className={styles.bg2} />
                <div className={styles.select}>00 (123) 456 78 90</div>
              </div>
              <div className={styles.lookingToInvest}>
                <span>{`Mobile No. `}</span>
                <span className={styles.callback}>*</span>
              </div>
            </div>
            <div className={styles.email}>
              <div className={styles.bgParent}>
                <div className={styles.bg2} />
                <div className={styles.select}>john@email.com</div>
              </div>
              <div className={styles.lookingToInvest}>
                <span>{`Email `}</span>
                <span className={styles.callback}>*</span>
              </div>
            </div>
            <div className={styles.name}>
              <div className={styles.bgParent}>
                <div className={styles.bg2} />
                <div className={styles.select}>John</div>
              </div>
              <div className={styles.lookingToInvest}>
                <span>{`Name `}</span>
                <span className={styles.callback}>*</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCallback;
