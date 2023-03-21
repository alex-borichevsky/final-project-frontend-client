import Layout from "../../components/layout.component";
import {nav} from "./constants/nav";
import ContentUserOrdersPage from "./content-user-orders.page";
import ContentUserCartsPage from "./content-user-carts.page";

export default function UserCartPage () {
    return(
        <Layout nav={nav} title={'Carts'}>
            <ContentUserCartsPage/>
        </Layout>
    );
}