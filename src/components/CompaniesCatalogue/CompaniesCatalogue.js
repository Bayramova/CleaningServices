import React, { Component } from "react";
import { Select, Spin } from "antd";
import CompaniesList from "./CompaniesList";
import CatalogueHeader from "./CatalogueHeader";
import "./Catalogue.css";
import { connect } from "react-redux";
import { handleSortValueChange } from "actions/sortCompanies";
import { getCompaniesData } from "actions/receiveData";
import InfiniteScroll from "react-infinite-scroller";

class CompaniesCatalogue extends Component {
  handleChange = value => {
    this.props.onChange(value);
  };

  render() {
    const { loadingCompanies, error } = this.props;
    const matchPath = this.props.match.params.titleId;
    const service = this.props.services.find(
      service => service.id === matchPath
    );
    return (
      <React.Fragment>
        <div className="companies-list__container">
          <section>
            <CatalogueHeader
              title={service.title}
              description={service.description}
            />
          </section>

          <section>
            <div className="companies-list__navigation">
              <Select
                defaultValue="Sort by"
                style={{ width: 120 }}
                onChange={this.handleChange}
              >
                <Select.Option value="rating">Rating</Select.Option>
                <Select.Option value="orders">Popularity</Select.Option>
              </Select>
            </div>
          </section>

          <section>
            <InfiniteScroll
              hasMore={this.props.hasMore}
              loader={<Spin key={this.props.page} />}
              loadMore={() => this.props.getCompaniesData(this.props.page)}
            >
              <CompaniesList
                companies={this.props.companies.filter(company =>
                  company.services.includes(matchPath)
                )}
              />
            </InfiniteScroll>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.data.services,
    companies: state.data.companies,
    page: state.data.page,
    hasMore: state.data.hasMore,
    loadingCompanies: state.data.loadingCompanies,
    error: state.data.error
  };
};

const mapDispatchToProps = {
  onChange: handleSortValueChange,
  getCompaniesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesCatalogue);

// import React, { Component } from "react";
// import { Select, Spin, Alert } from "antd";
// import CompaniesList from "./CompaniesList";
// import CatalogueHeader from "./CatalogueHeader";
// import "./Catalogue.css";
// import { connect } from "react-redux";
// import { handleSortValueChange } from "actions/sortCompanies";
// import { getCompaniesData } from "actions/receiveData";

// class CompaniesCatalogue extends Component {
//   componentDidMount() {
//     this.props.getCompaniesData();
//   }

//   handleChange = value => {
//     this.props.onChange(value);
//   };

//   render() {
//     const { loadingCompanies, error } = this.props;
//     const matchPath = this.props.match.params.titleId;
//     const service = this.props.services.find(
//       service => service.id === matchPath
//     );
//     return (
//       <React.Fragment>
//         {loadingCompanies ? (
//           <Spin className="app__loader" size="large" tip="Loading..." />
//         ) : error ? (
//           <Alert className="error__message" message={error} type="error" />
//         ) : (
//           <div className="companies-list__container">
//             <section>
//               <CatalogueHeader
//                 title={service.title}
//                 description={service.description}
//               />
//             </section>

//             <section>
//               <div className="companies-list__navigation">
//                 <Select
//                   defaultValue="Sort by"
//                   style={{ width: 120 }}
//                   onChange={this.handleChange}
//                 >
//                   <Select.Option value="rating">Rating</Select.Option>
//                   <Select.Option value="orders">Popularity</Select.Option>
//                 </Select>
//               </div>
//             </section>

//             <section>
//               <CompaniesList
//                 companies={this.props.companies.filter(company =>
//                   company.services.includes(matchPath)
//                 )}
//               />
//             </section>
//           </div>
//         )}
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     services: state.data.services,
//     companies: state.data.companies,
//     loadingCompanies: state.data.loadingCompanies,
//     error: state.data.error
//   };
// };

// const mapDispatchToProps = {
//   onChange: handleSortValueChange,
//   getCompaniesData
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CompaniesCatalogue);
