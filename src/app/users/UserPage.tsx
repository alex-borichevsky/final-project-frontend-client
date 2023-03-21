import Layout from "../../components/layout.component";
import {nav} from "./constants/nav";
import ContentUserPage from "./ContentUserPage";



export default function UserPage () {
    return(
        <Layout nav={nav} title={'Your profile'}>
            <ContentUserPage/>
        </Layout>
    );
}