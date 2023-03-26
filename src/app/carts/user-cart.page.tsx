import Layout from "../../components/layout.component";
import ContentUserCartsPage from "./content-user-carts.page";
import {nav} from "../users/constants/nav";

export default function UserCartPage () {
    return(
        <Layout nav={nav} title={'Carts'}>
            <ContentUserCartsPage/>
        </Layout>
    );
}