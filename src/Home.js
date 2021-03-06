import React, { Component } from 'react';
import { Link } from '@reach/router';

class Home extends Component {
    render() {

        const {user} = this.props;

        const biggerLead = {
            fontSize: 1.4 + 'em',
            fontWeight: 200
        };

        return(
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                        <div className="display-4 text-primary mt-3 mb-2"
                            style={{
                                fontSize: 2.8 + 'em'
                            }}
                        >
                            Meeting Log
                        </div>
                        <p className="lead" style={biggerLead}>
                            This simple app creates meetings, allows people to check in, and picks
                            random users to aware giveaways. It's a good example of a Single Page
                            Application which includes connection to a database and routing. It's a
                            practical way to learn <a href="https://reactjs.org/">React</a> with 
                            <a href="https://firebase.google.com"> Firebase</a>.
                        </p>

                        {user == null && (
                            <div>
                                <Link to="/register" class="btn btn-outline-primary mr-2">
                                    Register
                                </Link>
                                <Link to="/login" class="btn btn-outline-primary mr-2">
                                    Login
                                </Link>
                            </div>
                        )}
                        {user && (
                            <Link to="/meetings" class="btn btn-primary">
                                Meetings
                            </Link>
                        )}
                      </div> 
                    </div>
                </div>  
        );
    }
}

export default Home;