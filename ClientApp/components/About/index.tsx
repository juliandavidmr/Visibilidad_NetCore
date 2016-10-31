import * as React from 'react';

// Defines the interface of the state of the TodoItem component
interface IAboutState {
  name : string,
  subtitle?: string
}

export default class AboutComponent extends React.Component<any, IAboutState> {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Acerca de'
    };
  }

  public render() {
    return (
      <div>
        <section id="mu-page-breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-page-breadcrumb-area">
                  <h2>{this.state.name}</h2>
                  <ol className="breadcrumb">
                    <li><a href="#">Principal</a></li>
                    <li className="active">Acerca de</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mu-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-contact-area">

                  <div className="mu-title">
                    <h2>Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ut laboriosam corporis doloribus, officia, accusamus illo nam tempore totam alias!</p>
                  </div>

                  <div className="mu-contact-content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mu-contact-left">
                          <form className="contactform">
                            <p className="comment-form-author">
                              <label>Name <span className="required">*</span></label>
                              <input type="text" value="" name="author" />
                            </p>
                            <p className="comment-form-email">
                              <label>Email <span className="required">*</span></label>
                              <input type="email" aria-required="true" value="" name="email" />
                            </p>
                            <p className="comment-form-url">
                              <label>Subject</label>
                              <input type="text" name="subject" />
                            </p>
                            <p className="comment-form-comment">
                              <label>Message</label>
                              <textarea aria-required="true" name="comment"></textarea>
                            </p>
                            <p className="form-submit">
                              <input type="submit" value="Send Message" className="mu-post-btn" name="submit" />
                            </p>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mu-contact-right">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6249.345033302234!2d-80.02791918555701!3d40.45935344513505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8834f411a7b748bd%3A0xaec8197db3de9a9e!2sCalifornia-Kirkbride%2C+Pittsburgh%2C+PA%2C+USA!3m2!1d40.4600435!2d-80.0213538!5e0!3m2!1sen!2sbd!4v1464270878470" width="100%" height="450"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}