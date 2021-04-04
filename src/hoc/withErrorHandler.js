import React, { Component } from 'react';

const withErrorHandler = (WrappedComponents, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        constructor(props) {
            super(props);
            this.requestInterceptor = axios.interceptors.response.use(req => {
                this.setState({ error: null })
                return req;
            })
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error })
            })
        }


        componentWillUnmount() {
            // console.log("[Will Unmount]", this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.request.eject(this.responseInterceptor);

        }


        errorConfirmed = () => {
            this.setState({ error: null })
        }

        render() {

            return (
            // <Auxiliary>
            //     <Modal show={this.state.error}
            //         modalClosed={this.errorConfirmed}>
            //         {this.state.error ? this.state.error.message : null}
            //     </Modal>
            //     <WrappedComponents {...this.props} />
            // </Auxiliary>
            <div></div>
            )
        }
  
    }
}

export default withErrorHandler;