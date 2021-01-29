import React from "react";
import Section from "./Section";
import { MDBContainer } from "mdbreact";

function Research(){
    return(
        <div className='research' id='research'>
            <Section name='Research' />
            <MDBContainer fluid>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5 className='category publish-research'>Patents</h5>
                        <button className='btn btn-dark researchButton'>
                            <div className='publication'>
                                <h6 className='title'>A Vision Augmenting Smart Interactive Device to Increase Self-Dependency for Blind People</h6>
                                <p>Indian Patent Office</p>
                                <p>Abstract: The invention provides an interactive apparatus for visually impaired or blind people to process information, signs, figures, life forms and other surroundings and therefore empowering them to perform day to day functions like a sighted person. The apparatus comprises of a cap-mounted Internet-enabled imaging device to continuously capture surrounding information at 360 degrees and send it to a cloud server. The captured images are processed and analysed at the cloud to read text, detect incoming threats, assist in navigation, recognise people and more. The analysed data is converted into audio information according to the chosen language and dialect and is transmitted to a portable Internet-enabled handheld device. The audio is further transmitted to a bone conducted earpiece fitted in the cap over Bluetooth. This provides security and self-reliance and also enhances the capabilities of the user.</p>
                                <a href='https://ipindia.gov.in/writereaddata/Portal/IPOJournal/1_4931_1/Part-1.pdf#page=101' target="_blank" rel="noopener noreferrer" className='linkButton'>See Patent (Page 101)</a>
                            </div>
                        </button>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5 className='category publish-research'>Publications</h5>
                        <button className='btn btn-dark researchButton'>
                            <div className='publication'>
                                <h6 className='title'>Improved Classification for Pneumonia Detection using Transfer Learning with GAN based Synthetic Image Augmentation</h6>
                                <p>Confluence-2021:11th International Conference on Cloud Computing, Data Science & Engineering</p>
                                <p>Abstract: Deep learning techniques have found their applications in various domains, and they are being widely used in medical treatments and diagnostics. To diagnose diseases viz. pneumonia, the examination of chest X-ray images are often conducted, and the efficiency of diagnosis can be significantly improved with the use of computer-aided diagnostic systems. Deep learning algorithms are used in this paper for the classification of chest X-ray images to diagnose pneumonia. Deep convolutional generative adversarial networks were trained for augmentation of synthetic images to oversample the dataset for the model to perform better. Then transfer learning was used with convolutional neural networks by utilising VGG16 as the base model for image classification. The model was able to achieve 94.5% accuracy on the validation set. In comparison with the naïve models, the accuracy of the proposed model was found to be significantly higher.</p>
                            </div>
                        </button>
                    </div>
                </div>
            </MDBContainer>
            
            



        </div>
    )
}

export default Research;