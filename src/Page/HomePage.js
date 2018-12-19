import React from 'react';
import Page from '../Component/Page';


import Data from '../Data';

class HomePage extends React.Component{
    buildContent() {
        let homepageContent = [];
        
        homepageContent.push(
            <div>lll</div>
        );


        return homepageContent;
    }
    render(){
        return(
            <div>
                <Page cls="app-homepage" _content={this.buildContent()}></Page>
            </div>

        )
    }

}
export default HomePage;