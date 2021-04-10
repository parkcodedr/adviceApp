import React, { useState, useEffect } from 'react'
import './App.css';
const App = () => {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => setAdvice(data.slip.advice))
            .catch((err) => console.log(err));
    }
    const openWhatsApp = () => {
        window.open(`whatsapp://send?text=${advice}`);
    }

    return (
        <div className="app">

            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">AdviceME</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="col-6 offset-3 mt-5">
                <center><h1>Welcome to my advice app with REACT and FETCH API</h1></center>
                <div className="card">
                    <div className="card-header">
                        Advice
                </div>
                    <div className="card-body">

                        <p className="card-text">{advice}</p>
                        <button class="btn btn-primary" onClick={fetchAdvice}>Advice Me</button>
                        <img src="whatsapp2.png" height="50" size="50" onClick={openWhatsApp} />

                    </div>
                </div>
            </div>

            <div class="jumbotron">
                <script data-cfasync="false" id="clevernt" type="text/javascript">
                    (function (document, window) {
                        let c = document.createElement("script");
                c.type = "text/javascript"; c.async = !0; c.id = "CleverNTLoader49769";  c.setAttribute("data-target",window.name); c.setAttribute("data-callback","put-your-callback-macro-here");
                c.src = "//clevernt.com/scripts/7e561d8b760be25121ed21e5522dc40e.min.js?20210409=" + Math.floor((new Date).getTime());
                var a = !1;
                try {
                        a = parent.document.getElementsByTagName("script")[0] || document.getElementsByTagName("script")[0];
                } catch (e) {
                        a = !1;
                }
                a || ( a = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]);
                a.parentNode.insertBefore(c, a);
            })(document, window);
                                </script>
            </div>
        </div>

    );

}
export default App;