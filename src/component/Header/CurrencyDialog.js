import React, { useRef, useEffect, useState } from 'react'
import styles from '../../style/CurrencyDialog.module.css'
import { FiCheck, FiX, FiSearch } from 'react-icons/fi'

// import React, { useState, useRef, useEffect } from 'react'
// import styles from './RelativeDialog.module.css'
// import { FiCheck, FiX, FiSearch } from 'react-icons/fi'

const RelativePositionDialog = ({ onClose, onCurrencySelect, triggerRef }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('Rs. Indian Rupee')
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!triggerRef?.current || !dialogRef?.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const dialogRect = dialogRef.current.getBoundingClientRect()

    dialogRef.current.style.top = `${triggerRect.bottom + 8}px`
    dialogRef.current.style.left = `${
      triggerRect.left + (triggerRect.width - dialogRect.width) / 2
    }px`

    // 👇 Outside click handler
    const handleOutsideClick = e => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const currencies = [
    { code: 'Rs.', name: 'Indian Rupee', popular: true, suggested: true },
    { code: 'RM', name: 'Malaysian Ringgit', popular: true },
    { code: 'P', name: 'Philippine Peso', popular: true },
    { code: 'USD', name: 'US Dollar', popular: true },
    { code: 'AFN', name: 'Afghani' },
    { code: 'HKD', name: 'Hong Kong Dollar' },
    { code: 'PKR', name: 'Pakistan Rupee' },
    { code: 'AED', name: 'Arab Emirates Dirham' },
    { code: 'Ft', name: 'Hungarian Forint' },
    { code: 'zi', name: 'Polish Zloty' },
    { code: 'AUD', name: 'Australian Dollar' }
  ]

  const filteredCurrencies = currencies.filter(
    currency =>
      currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const popularCurrencies = currencies.filter(currency => currency.popular)
  const suggestedCurrency = currencies.find(currency => currency.suggested)

  const handleSelect = currency => {
    setSelectedCurrency(`${currency.code} ${currency.name}`)
    onCurrencySelect(`${currency.code} ${currency.name}`)
    onClose()
  }

  return (
    <div className={styles.dialogContainer} ref={dialogRef}>
      <div className={styles.dialogHeader}>
        <h3>PRICE DISPLAY</h3>
        <button onClick={onClose} className={styles.closeButton}>
          <FiX />
        </button>
      </div>

      {/* <div className={styles.priceInfo}>
        <div className={styles.priceRow}>
          <span>Base price per night</span>
          <span className={styles.priceValue}>-</span>
        </div>
        <div className={styles.priceRow}>
          <span>Total price per night</span>
          <span className={styles.priceValue}>-</span>
        </div>
      </div> */}

      <div className={styles.currencySections}>
        {suggestedCurrency && (
          <div className={styles.currencySection}>
            <h4>Suggested currencies</h4>
            <div
              className={`${styles.currencyItem} ${
                selectedCurrency ===
                `${suggestedCurrency.code} ${suggestedCurrency.name}`
                  ? styles.selected
                  : ''
              }`}
              onClick={() => handleSelect(suggestedCurrency)}
            >
              <span>
                {suggestedCurrency.code} {suggestedCurrency.name}
              </span>
              {selectedCurrency ===
                `${suggestedCurrency.code} ${suggestedCurrency.name}` && (
                <FiCheck />
              )}
            </div>
          </div>
        )}

        <div className={styles.currencySection}>
          <h4>Popular currencies</h4>
          <div className={styles.currencyGrid}>
            {popularCurrencies.map(currency => (
              <div
                key={currency.code}
                className={`${styles.currencyItem} ${
                  selectedCurrency === `${currency.code} ${currency.name}`
                    ? styles.selected
                    : ''
                }`}
                onClick={() => handleSelect(currency)}
              >
                <span>
                  {currency.code} {currency.name}
                </span>
                {selectedCurrency === `${currency.code} ${currency.name}` && (
                  <FiCheck />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.currencySection}>
          <div className={styles.searchContainer}>
            <FiSearch className={styles.searchIcon} />
            <input
              type='text'
              placeholder='Search currencies'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <h4>All currencies</h4>
          <div className={styles.currencyList}>
            {filteredCurrencies.map(currency => (
              <div
                key={currency.code}
                className={`${styles.currencyItem} ${
                  selectedCurrency === `${currency.code} ${currency.name}`
                    ? styles.selected
                    : ''
                }`}
                onClick={() => handleSelect(currency)}
              >
                <span>
                  {currency.code} {currency.name}
                </span>
                {selectedCurrency === `${currency.code} ${currency.name}` && (
                  <FiCheck />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelativePositionDialog
