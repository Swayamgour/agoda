// PaymentMethodsTab.jsx
import React, { useState } from 'react';
import { 
  FiCreditCard, FiPlus, FiTrash2, FiEdit, 
  FiCheck, FiChevronDown, FiChevronUp 
} from 'react-icons/fi';
import { 
  FaCcVisa, FaCcMastercard, FaCcApplePay, 
  FaCcPaypal, FaCcAmazonPay, FaCcAmex 
} from 'react-icons/fa';
import styles from '../../style/UserProfile.module.css';

const PaymentMethodsTab = () => {
  const [activeTab, setActiveTab] = useState('cards');
  const [expandedCard, setExpandedCard] = useState(null);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample payment methods data
  const paymentMethods = {
    cards: [
      {
        id: 'card-1',
        type: 'visa',
        last4: '4242',
        expiry: '12/25',
        name: 'John Doe',
        isDefault: true,
        billingAddress: {
          line1: '123 Main St',
          line2: 'Apt 4B',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'United States'
        }
      },
      {
        id: 'card-2',
        type: 'mastercard',
        last4: '5555',
        expiry: '08/24',
        name: 'John Doe',
        isDefault: false,
        billingAddress: {
          line1: '123 Main St',
          line2: 'Apt 4B',
          city: 'New York',
          state: 'NY',
          zip: '10001',
          country: 'United States'
        }
      }
    ],
    wallets: [
      {
        id: 'wallet-1',
        type: 'paypal',
        email: 'john.doe@example.com'
      },
      {
        id: 'wallet-2',
        type: 'applepay',
        email: 'john.doe@icloud.com'
      }
    ]
  };

  // Form state for adding/editing cards
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    makeDefault: false,
    billingAddress: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes('billingAddress.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment method here
    console.log('Form submitted:', formData);
    setIsAddingCard(false);
    setIsEditing(false);
    setFormData({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      makeDefault: false,
      billingAddress: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
      }
    });
  };

  const setAsDefault = (id) => {
    // In a real app, you would update the default payment method here
    console.log(`Set as default: ${id}`);
  };

  const deletePaymentMethod = (id) => {
    // In a real app, you would delete the payment method here
    console.log(`Delete payment method: ${id}`);
  };

  const getCardIcon = (type) => {
    switch(type) {
      case 'visa':
        return <FaCcVisa className={styles.cardBrandIcon} />;
      case 'mastercard':
        return <FaCcMastercard className={styles.cardBrandIcon} />;
      case 'amex':
        return <FaCcAmex className={styles.cardBrandIcon} />;
      case 'applepay':
        return <FaCcApplePay className={styles.cardBrandIcon} />;
      case 'paypal':
        return <FaCcPaypal className={styles.cardBrandIcon} />;
      case 'amazonpay':
        return <FaCcAmazonPay className={styles.cardBrandIcon} />;
      default:
        return <FiCreditCard className={styles.cardBrandIcon} />;
    }
  };

  return (
    <div className={styles.paymentMethodsTab}>
      {/* Payment Methods Header */}
      <div className={styles.paymentHeader}>
        <h2>
          Payment Methods
        </h2>
        <div className={styles.paymentTabs}>
          <button
            className={activeTab === 'cards' ? styles.active : ''}
            onClick={() => setActiveTab('cards')}
          >
            Credit/Debit Cards
          </button>
          <button
            className={activeTab === 'wallets' ? styles.active : ''}
            onClick={() => setActiveTab('wallets')}
          >
            Digital Wallets
          </button>
        </div>
      </div>

      {/* Payment Methods List */}
      <div className={styles.paymentMethodsList}>
        {activeTab === 'cards' && (
          <>
            {paymentMethods.cards.map(card => (
              <div key={card.id} className={`${styles.paymentMethodCard} ${expandedCard === card.id ? styles.expanded : ''}`}>
                <div 
                  className={styles.cardHeader}
                  onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                >
                  <div className={styles.cardInfo}>
                    {getCardIcon(card.type)}
                    <div className={styles.cardDetails}>
                      <span className={styles.cardType}>{card.type.charAt(0).toUpperCase() + card.type.slice(1)}</span>
                      <span className={styles.cardNumber}>•••• •••• •••• {card.last4}</span>
                    </div>
                  </div>
                  
                  <div className={styles.cardActions}>
                    {card.isDefault && (
                      <span className={styles.defaultBadge}>
                        <FiCheck /> Default
                      </span>
                    )}
                    <button 
                      className={styles.actionButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEditing(true);
                        setFormData({
                          cardNumber: `•••• •••• •••• ${card.last4}`,
                          cardName: card.name,
                          expiryDate: card.expiry,
                          cvv: '•••',
                          makeDefault: card.isDefault,
                          billingAddress: { ...card.billingAddress }
                        });
                      }}
                    >
                      <FiEdit /> Edit
                    </button>
                    <div className={styles.expandIcon}>
                      {expandedCard === card.id ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                  </div>
                </div>
                
                {/* Expanded Card Details */}
                {expandedCard === card.id && (
                  <div className={styles.cardDetailsExpanded}>
                    <div className={styles.detailsGrid}>
                      <div className={styles.detailsColumn}>
                        <h4>Card Details</h4>
                        <div className={styles.detailRow}>
                          <span className={styles.detailLabel}>Cardholder Name:</span>
                          <span>{card.name}</span>
                        </div>
                        <div className={styles.detailRow}>
                          <span className={styles.detailLabel}>Expiration Date:</span>
                          <span>{card.expiry}</span>
                        </div>
                      </div>
                      
                      <div className={styles.detailsColumn}>
                        <h4>Billing Address</h4>
                        <div className={styles.detailRow}>
                          <span className={styles.detailLabel}>Address:</span>
                          <span>
                            {card.billingAddress.line1}<br />
                            {card.billingAddress.line2 && (
                              <>{card.billingAddress.line2}<br /></>
                            )}
                            {card.billingAddress.city}, {card.billingAddress.state} {card.billingAddress.zip}<br />
                            {card.billingAddress.country}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.cardActionsBottom}>
                      {!card.isDefault && (
                        <button 
                          className={styles.defaultButton}
                          onClick={() => setAsDefault(card.id)}
                        >
                          Set as default
                        </button>
                      )}
                      <button 
                        className={styles.deleteButton}
                        onClick={() => deletePaymentMethod(card.id)}
                      >
                        <FiTrash2 /> Remove card
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {isAddingCard || isEditing ? (
              <div className={styles.addCardForm}>
                <h3>{isEditing ? 'Edit Card' : 'Add New Card'}</h3>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label>Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Cardholder Name</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Expiration Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Security Code (CVV)</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroupFull}>
                      <h4>Billing Address</h4>
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Address Line 1</label>
                      <input
                        type="text"
                        name="billingAddress.line1"
                        value={formData.billingAddress.line1}
                        onChange={handleInputChange}
                        placeholder="123 Main St"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Address Line 2 (Optional)</label>
                      <input
                        type="text"
                        name="billingAddress.line2"
                        value={formData.billingAddress.line2}
                        onChange={handleInputChange}
                        placeholder="Apt 4B"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>City</label>
                      <input
                        type="text"
                        name="billingAddress.city"
                        value={formData.billingAddress.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>State/Province</label>
                      <input
                        type="text"
                        name="billingAddress.state"
                        value={formData.billingAddress.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>ZIP/Postal Code</label>
                      <input
                        type="text"
                        name="billingAddress.zip"
                        value={formData.billingAddress.zip}
                        onChange={handleInputChange}
                        placeholder="10001"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label>Country</label>
                      <input
                        type="text"
                        name="billingAddress.country"
                        value={formData.billingAddress.country}
                        onChange={handleInputChange}
                        placeholder="United States"
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroupFull}>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="makeDefault"
                          checked={formData.makeDefault}
                          onChange={handleInputChange}
                        />
                        Set as default payment method
                      </label>
                    </div>
                  </div>
                  
                  <div className={styles.formButtons}>
                    <button 
                      type="button" 
                      className={styles.cancelButton}
                      onClick={() => {
                        setIsAddingCard(false);
                        setIsEditing(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className={styles.submitButton}
                    >
                      {isEditing ? 'Update Card' : 'Add Card'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <button 
                className={styles.addCardButton}
                onClick={() => setIsAddingCard(true)}
              >
                <FiPlus /> Add New Card
              </button>
            )}
          </>
        )}
        
        {activeTab === 'wallets' && (
          <>
            {paymentMethods.wallets.map(wallet => (
              <div key={wallet.id} className={styles.paymentMethodCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardInfo}>
                    {getCardIcon(wallet.type)}
                    <div className={styles.cardDetails}>
                      <span className={styles.cardType}>
                        {wallet.type === 'applepay' ? 'Apple Pay' : 
                         wallet.type === 'paypal' ? 'PayPal' : 
                         wallet.type.charAt(0).toUpperCase() + wallet.type.slice(1)}
                      </span>
                      <span className={styles.cardNumber}>{wallet.email}</span>
                    </div>
                  </div>
                  
                  <div className={styles.cardActions}>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => deletePaymentMethod(wallet.id)}
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className={styles.walletOptions}>
              <h3>Add Digital Wallet</h3>
              <div className={styles.walletButtons}>
                <button className={styles.walletButton}>
                  <FaCcPaypal className={styles.walletIcon} />
                  Connect PayPal
                </button>
                <button className={styles.walletButton}>
                  <FaCcApplePay className={styles.walletIcon} />
                  Add Apple Pay
                </button>
                <button className={styles.walletButton}>
                  <FaCcAmazonPay className={styles.walletIcon} />
                  Add Amazon Pay
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodsTab;