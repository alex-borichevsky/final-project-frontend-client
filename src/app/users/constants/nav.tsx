import {ReactNode} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

type NavParams = {
    icon: ReactNode;
    text: string;
    navigatePath: string;
}

export const nav: Array<NavParams> = [
    {icon: <AccountBoxIcon/>, text: 'profile', navigatePath: '/users'},
    {icon: <AttachMoneyIcon/>, text: 'orders', navigatePath: '/users/orders'},
    {icon: <ShoppingCartIcon/>, text: 'carts', navigatePath: '/users/carts'},
    {icon: <SettingsSuggestIcon/>, text: 'settings', navigatePath: '/users/settings'},
];