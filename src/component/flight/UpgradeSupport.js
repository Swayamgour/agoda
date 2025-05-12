import React from 'react'
import styles from '../../style/UpgradeSupport.module.css'

const UpgradeSupportTable = () => {
  const plansData = [
    {
      name: 'Basic',
      price: 'Rs. 0',
      name2: 'Plus',
      price2: 'Rs. 768',
      name3: 'Premium',
      price3: 'Rs. 1,708',
      title: null,
      title_two: null
    },
    {
      name: '✓',
      price: null,
      name2: '✓',
      price2: null,
      name3: '✓',
      price3: null,
      title: '24/7 live support',
      title_two: 'Get real human help night or day'
    },
    {
      name: 'Rs. 5,464',
      price: null,
      name2: 'Rs. 2,732',
      price2: null,
      name3: 'Waived',
      price3: 'Airline fees apply',
      title: 'Change service fees',
      title_two: 'Agoda fees on change requests (airline fees still apply)'
    },
    {
      name: 'Rs. 5,464',
      price: null,
      name2: 'Rs. 2,732',
      price2: null,
      name3: 'Waived',
      price3: 'Airline fees apply',
      title: 'Cancellation service fees',
      title_two: 'Agoda fees for cancellations (airline fees still apply)'
    },
    {
      name: 'Selected',
      price: null,
      name2: '✓',
      price2: null,
      name3: '✓',
      price3: null,
      title: 'Bonus promo code',
      title_two: 'Rs. 854 promo code for accommodations'
    },
    {
      name: 'Select',
      price: null,
      name2: 'Fast',
      price2: null,
      name3: 'Fastest',
      price3: null,
      title: 'Priority assistance',
      title_two: 'Reach a live agent in minutes or less'
    },
    {
      name: 'Select',
      price: null,
      name2: 'Select',
      price2: null,
      name3: 'Select',
      price3: null,
      title: null,
      title_two: null
    }
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upgrade your support level</h1>
      <p className={styles.description}>
        Our premium service levels can save you money if your plans change.{' '}
        <strong className={styles.learnMore}>Learn more</strong>
      </p>

      <div className={styles.featuresContainer}>
        {plansData.map((e, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.featureColumn}>
              <div className={styles.featureText}>
                {e.title && (
                  <div className={styles.featureTitle}>{e.title}</div>
                )}
                {e.title_two && (
                  <div className={styles.featureDescription}>{e.title_two}</div>
                )}
              </div>
            </div>
            <div className={styles.planColumn}>
              <div className={styles.planValue}>{e.name}</div>
              {e.price && <div className={styles.planSubValue}>{e.price}</div>}
            </div>
            <div className={styles.planColumn}>
              <div className={styles.planValue}>{e.name2}</div>
              {e.price2 && (
                <div className={styles.planSubValue}>{e.price2}</div>
              )}
            </div>
            <div
              className={`${styles.planColumn} ${
                index === 0 ? styles.premiumColumn : ''
              }`}
            >
              <div className={styles.planValue}>{e.name3}</div>
              {e.price3 && (
                <div className={styles.planSubValue}>{e.price3}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.popularNote}>Top peace-of-mind choice!</div>
    </div>
  )
}

export default UpgradeSupportTable
