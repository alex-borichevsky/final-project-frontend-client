import React from "react";
import UserForm from "./user-form";

export default function ContentUserSettingsPage() {
    return (
        <UserForm handleSubmit={() => console.log(1)}/>
    );
}