import Layout from "../../components/layout.component";
import {nav} from "../users/constants/nav";
import ContentUserSettingsPage from "./content-user-settings.page";

export default function UserSettingsPage () {
    return(
        <Layout nav={nav} title={'Settings'}>
            <ContentUserSettingsPage/>
        </Layout>
    );
}