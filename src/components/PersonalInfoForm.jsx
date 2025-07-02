import FormHeader from "./FormHeader";
import NameFields from "./NameFields";
import EmailField from "./EmailField";
import PhotoUpload from "./PhotoUpload";
import PasswordChangeForm from "./PasswordChangeForm";
import RoleField from "./RoleField";
import CountryField from "./CountryField";
import MobileField from "./MobileField";
import TimezoneField from "./TimezoneField";
import BioField from "./BioField";

/* This is the main personal information form that brings together all the smaller components */
const PersonalInfoForm = () => {
  return (
    <form className={`bg-primary`}>
      <FormHeader />
      <NameFields />
      <EmailField />
      <PhotoUpload />
      <PasswordChangeForm />
      <RoleField />
      <CountryField />
      <MobileField />
      <TimezoneField />
      <BioField />
    </form>
  );
};

export default PersonalInfoForm;
