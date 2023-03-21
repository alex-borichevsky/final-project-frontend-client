import Layout from "../../components/layout.component";
import {nav} from "./constants/nav";
import ContentUserOrdersPage from "./ContentUserOrdersPage";
import ContentUserCartsPage from "./ContentUserCartsPage";

export default function UserCartPage () {
    return(
        <Layout nav={nav} title={'Carts'}>
            <ContentUserCartsPage/>
        </Layout>
    );
}