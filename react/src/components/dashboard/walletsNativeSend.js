import React from 'react';
import { translate } from '../../translate/translate';

class WalletsNativeSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
      to: null,
      amount: 0,
      fee: 0.0001,
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderAddressList() {
    return this.props.ActiveCoin.addresses.map((address) =>
      <option key={address} value={address}>{address}</option>
    );
  }

  updateInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    if (this.props && this.props.ActiveCoin && this.props.ActiveCoin.nativeActiveSection === 'send') {
      return (
        <div data-extcoin="COIN" id="kmd_wallet_send">
          <div className="col-xlg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="panel" id="projects">
              <div className="panel-heading">
                <h3 data-extcoin="COIN" className="panel-title">
                  {translate('INDEX.SEND')} <span data-extcoinname="COIN"></span>
                </h3>
              </div>
              <div className="panel-body container-fluid">
                <form className="extcoin-send-form" data-extcoin="COIN" method="post" role="form" autoComplete="off">
                  <div className="row">
                    <div className="col-xlg-12 form-group form-material">
                      <label className="control-label" data-extcoin="COIN" htmlFor="kmd_wallet_send_from">{translate('INDEX.SEND_FROM')}</label>
                      <select className="form-control form-material showkmdwalletaddrs show-tick" name="from" onChange={this.updateInput} data-extcoin="COIN" id="kmd_wallet_send_from" title="Select Transparent or Private Address" data-size="5">
                      {this.renderAddressList()}
                      </select>
                    </div>
                    <div className="col-xlg-12 form-group form-material">
                      <label className="control-label" data-extcoin="COIN" htmlFor="kmd_wallet_sendto">{translate('INDEX.SEND_TO')}</label>
                      <input type="text" className="form-control" data-extcoin="COIN" name="to" onChange={this.updateInput} id="kmd_wallet_sendto" placeholder="Enter Transparent or Private address" autoComplete="off" required />
                    </div>
                    <div className="col-lg-6 form-group form-material">
                      <label className="control-label" htmlFor="kmd_wallet_amount" data-extcoin="COIN" id="kmd_wallet_amount_label">
                        <span data-extcoinname="COIN"></span>
                      </label>
                      <input type="text" className="form-control" name="amount" onChange={this.updateInput} data-extcoin="COIN" id="kmd_wallet_amount" placeholder="0.000" autoComplete="off" />
                    </div>
                    <div className="col-lg-6 form-group form-material">
                      <label className="control-label" data-extcoin="COIN" htmlFor="kmd_wallet_fee">{translate('INDEX.FEE')}</label>
                      <input type="text" className="form-control" name="fee" onChange={this.updateInput} data-extcoin="COIN" id="kmd_wallet_fee" placeholder="0.000" value={this.state.fee} autoComplete="off" />
                    </div>
                    <div className="col-lg-12">
                      <span data-extcoin="KMD">
                        <b>{translate('INDEX.TOTAL')}:</b> {this.state.amount} + {this.state.fee}/kb {this.props.ActiveCoin.coin}
                      </span>
                    </div>
                    <div className="col-lg-12">
                      <button type="button" className="btn btn-primary waves-effect waves-light pull-right" data-toggle="modal" id="kmd_wallet_send_coins_btn" onClick={this.handleSubmit}>
                        {translate('INDEX.SEND')} {this.state.amount} {this.props.ActiveCoin.coin}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xs-12">
            <div className="row">
              <div className="panel nav-tabs-horizontal">
                <div data-extcoin="COIN" id="kmd_wallet_opids_status_section">
                  <div className="col-xlg-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="panel">
                      <header className="panel-heading">
                        <div className="panel-actions">
                          <button className="btn btn-info btn-block" id="kmd_opids_status_btn" type="button">
                            <i className="icon fa-repeat" aria-hidden="true"></i> {translate('INDEX.REFRESH')}
                          </button>
                        </div>
                        <h3 className="panel-title">{translate('INDEX.OPERATIONS_STATUSES')}</h3>
                      </header>
                      <div className="panel-body">
                        <table className="table table-hover dataTable table-striped" data-extcoin="COIN" id="kmd-opid-status-tbl" width="100%">
                          <thead>
                            <tr>
                              <th>{translate('INDEX.STATUS')}</th>
                              <th>ID</th>
                              <th>{translate('INDEX.TIME')}</th>
                              <th>{translate('INDEX.RESULT')}</th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th>{translate('INDEX.STATUS')}</th>
                              <th>ID</th>
                              <th>{translate('INDEX.TIME')}</th>
                              <th>{translate('INDEX.RESULT')}</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default WalletsNativeSend;
