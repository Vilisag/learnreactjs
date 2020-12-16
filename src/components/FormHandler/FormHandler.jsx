import React from 'react';

class FormHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    changeInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitForm(e) {
        e.preventDefault();
        const validation = this.validationForm();

        if (validation.error) {
            alert(validation.msg);
        } else {
            alert('Submit form success!');
        }
    }

    validationForm() {
        const re = /\S+@\S+\.\S+/;
        let returnData = {
            error: false,
            msg: ''
        };
        const {email, password} = this.state;

        if (email === "") {
            returnData = {
                error: true,
                msg: 'Email is required item!'
            }
            
        }

        if (!returnData.error && !re.test(email)) {
            returnData = {
                error: true,
                msg: 'Email does not correct format!'
            }
        }

        if (!returnData.error && password.length < 8) {
            returnData = {
                error: true,
                msg: 'Password have to over 8 chars!'
            }
        }

        return returnData;
    }

    render() {
        return (
            <div style={{padding: "5%"}}>
                <form onSubmit={(e) => this.submitForm(e)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Enter email" onChange={(e) => this.changeInputValue(e)}/>
                    </div>
                    <div>
                        <label htmlFor="pwd">Password</label>
                        <input type="password" name="password" onChange={(e) => this.changeInputValue(e)}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    };
}

export default FormHandler;
