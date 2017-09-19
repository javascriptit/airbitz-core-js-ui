import React, { Component } from 'react'
import styles from './Header.mobileStyle.scss'
import { sprintf } from 'sprintf-js'
import t from 'lib/web/LocaleStrings'

export default class Header extends Component {
  _renderHeaderText = (pathname) => {
    const name = window.parent.abcui.vendorName || window.abcui.vendorName
    switch (pathname) {
      case '/account':
        return 'Manage your ' + name + ' account'
      case '/changepin':
        return 'Change your 4-digit PIN'
      case '/changepassword':
        return 'Change your password'
      case '/passwordrecovery':
        return 'Password Recovery Setup'
      default:
        return sprintf(t('fragment_setup_header_left'), name)
    }
  }
  render () {
    return (
      <div className={styles.container}>
        <p><img src={window.parent.abcui.vendorImageUrl || window.abcui.vendorImageUrl} className={styles.icon} /></p>
        <p className={styles.text}>
          {this._renderHeaderText(this.props.location.pathname)}
        </p>
      </div>
    )
  }
}
