// -- React and related libs
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';

// -- Third Party Libs
import PropTypes from 'prop-types';

// -- Custom Components
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadbrumbs/Breadcrumbs';
import Dashboard from '../../pages/dashboard/Dashboard';
import Typography from '../../pages/typography/Typography';
import Notifications from '../../pages/notifications/Notifications';
import CrmCare from '../../pages/crm-care/CrmCare';
import CrmGroup from '../../pages/crm-group/CrmGroup';
import Tables from '../../pages/tables/Tables';
import Charts from '../../pages/uielements/charts/Charts';
import Icons from '../../pages/uielements/icons/IconsPage';
import Maps from '../../pages/uielements/maps/google/GoogleMapPage';

// -- Component Styles
import s from './Layout.module.scss';
import CrmCustomers from '../../pages/CRM-customer/CrmCustomer';

const CrmLayout = (props) => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          {/* <Breadcrumbs url={props.location.pathname} /> */}
          <Switch>
            {/* <Route
              path='/crm'
              exact
              render={() => <Redirect to='template/dashboard' />}
            /> */}
            <Route path='/crm/dashboard' exact component={Dashboard} />
            <Route path='/crm/care' exact component={CrmCare} />
            <Route path='/crm/customers' exact component={CrmCustomers} />
            <Route path='/crm/group' exact component={CrmGroup} />
            <Route path='/crm/tables' exact component={Tables} />
            <Route path='/crm/notifications' exact component={Notifications} />
            <Route
              path='/crm/ui-elements'
              exact
              render={() => <Redirect to={'/template/ui-elements/charts'} />}
            />
            <Route path='/crm/ui-elements/charts' exact component={Charts} />
            <Route path='/crm/ui-elements/icons' exact component={Icons} />
            <Route path='/crm/ui-elements/maps' exact component={Maps} />
            <Route path='*' exact render={() => <Redirect to='/error' />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

CrmLayout.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(CrmLayout));
