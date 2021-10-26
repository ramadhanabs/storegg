import Sidebar from '../../components/organisms/Sidebar';
import EditProfileForm from '../../components/organisms/EditProfileForm';

export default function EditProfile() {
  return (
    <div>
      <section className="edit-profile overflow-auto">
        <Sidebar active="settings" />
        <EditProfileForm />
      </section>
    </div>
  );
}
