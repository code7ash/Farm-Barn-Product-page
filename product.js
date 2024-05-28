import FrameComponent from "../components/FrameComponent";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.products}>
      <FrameComponent />
      <section className={styles.frameParent}>
        <div className={styles.productCardsHeaderParent}>
          <div className={styles.productCardsHeader}>
            <div className={styles.watermelon}>
              <img
                className={styles.tomatoIcon}
                loading="lazy"
                alt=""
                src="/tomato@2x.png"
 />
              <div className={styles.watermelonInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.watermelonParent}>
                    <b className={styles.watermelon1}>Watermelon</b>
                    <div
                      className={styles.grownInTracy}
                    >{`Grown in Tracy, CA `}</div>
                  </div>
                  <div className={styles.lb}>$0.89 / lb</div>
                </div>
              </div>
            </div>
            <div className={styles.card} />
          </div>
          <div className={styles.card1} />
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.card2} />
 </div>
      </section>
    </div>
  );
};

export default Products;