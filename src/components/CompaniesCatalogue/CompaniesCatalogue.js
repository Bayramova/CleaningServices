// import React, { Component } from "react";
// import { Select, Spin, Alert, message } from "antd";
// import CompaniesList from "./CompaniesList";
// import CatalogueHeader from "./CatalogueHeader";
// import "./Catalogue.css";
// import { connect } from "react-redux";
// import { handleSortValueChange } from "actions/sortCompanies";
// import { getCompaniesData } from "actions/receiveData";
// import InfiniteScroll from "react-infinite-scroller";
// import reqwest from "reqwest";

// class CompaniesCatalogue extends Component {
//   state = {
//     data: [],
//     page: 1,
//     loading: false,
//     hasMore: true
//   };

//   componentDidMount() {
//     this.fetchData(res => {
//       this.setState({
//         data: res,
//         page: this.state.page + 1
//       });
//     });
//   }

//   fetchData = callback => {
//     reqwest({
//       url: `http://localhost:5000/api/companies`,
//       type: "json",
//       method: "get",
//       data: { page: this.state.page },
//       contentType: "application/json",
//       success: res => {
//         callback(res);
//       }
//     });
//     // fetch(`http://localhost:5000/api/companies/${this.state.page}`, {
//     //   method: "GET",
//     //   headers: {
//     //     "Content-Type": "application/json"
//     //   }
//     // }).then(res => {
//     //   return callback(res);
//     // });
//   };

//   handleInfiniteOnLoad = () => {
//     let data = this.state.data;
//     this.setState({
//       loading: true
//     });
//     if (data.length > 25) {
//       message.warning("Infinite List loaded all");
//       this.setState({
//         hasMore: false,
//         loading: false
//       });
//       return;
//     }
//     this.fetchData(res => {
//       data = data.concat(res);
//       this.setState({
//         data,
//         page: this.state.page + 1,
//         loading: false
//       });
//     });
//   };

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
//       // <React.Fragment>
//       //   {loadingCompanies ? (
//       //     <Spin className="app__loader" size="large" tip="Loading..." />
//       //   ) : error ? (
//       //     <Alert className="error__message" message={error} type="error" />
//       //   ) : (
//       //     <div className="companies-list__container">
//       //       <section>
//       //         <CatalogueHeader
//       //           title={service.title}
//       //           description={service.description}
//       //         />
//       //       </section>

//       //       <section>
//       //         <div className="companies-list__navigation">
//       //           <Select
//       //             defaultValue="Sort by"
//       //             style={{ width: 120 }}
//       //             onChange={this.handleChange}
//       //           >
//       //             <Select.Option value="rating">Rating</Select.Option>
//       //             <Select.Option value="orders">Popularity</Select.Option>
//       //           </Select>
//       //         </div>
//       //       </section>

//       //       <section>
//       //         <InfiniteScroll
//       //           initialLoad={false}
//       //           pageStart={0}
//       //           loadMore={this.handleInfiniteOnLoad}
//       //           hasMore={!this.state.loading && this.state.hasMore}
//       //           useWindow={false}
//       //         >
//       //           <CompaniesList
//       //             companies={this.props.companies.filter(company =>
//       //               company.services.includes(matchPath)
//       //             )}
//       //           >
//       //             {this.state.loading && this.state.hasMore && (
//       //               <div className="demo-loading-container">
//       //                 <Spin />
//       //               </div>
//       //             )}
//       //           </CompaniesList>
//       //         </InfiniteScroll>
//       //       </section>
//       //     </div>
//       //   )}
//       // </React.Fragment>
//       <React.Fragment>
//         {this.state.loading ? (
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
//               <InfiniteScroll
//                 initialLoad={false}
//                 pageStart={0}
//                 loadMore={this.handleInfiniteOnLoad}
//                 hasMore={!this.state.loading && this.state.hasMore}
//                 useWindow={false}
//               >
//                 <CompaniesList companies={this.state.data}>
//                   {this.state.loading && this.state.hasMore && (
//                     <div className="demo-loading-container">
//                       <Spin />
//                     </div>
//                   )}
//                 </CompaniesList>
//               </InfiniteScroll>
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

import React, { Component } from "react";
import { Select, Spin, Alert } from "antd";
import CompaniesList from "./CompaniesList";
import CatalogueHeader from "./CatalogueHeader";
import "./Catalogue.css";
import { connect } from "react-redux";
import { handleSortValueChange } from "actions/sortCompanies";
import { getCompaniesData } from "actions/receiveData";

class CompaniesCatalogue extends Component {
  componentDidMount() {
    this.props.getCompaniesData();
  }

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
        {loadingCompanies ? (
          <Spin className="app__loader" size="large" tip="Loading..." />
        ) : error ? (
          <Alert className="error__message" message={error} type="error" />
        ) : (
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
              <CompaniesList
                companies={this.props.companies.filter(company =>
                  company.services.includes(matchPath)
                )}
              />
            </section>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.data.services,
    companies: state.data.companies,
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
