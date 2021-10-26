import Sidebar from '../../components/organisms/Sidebar';
import Overview from '../../components/organisms/Overview';

export default function Member() {
  return (
    <div>
      <section className="overview overflow-auto">
        <Sidebar active="overview" />
        <Overview />
      </section>
    </div>
  );
}
