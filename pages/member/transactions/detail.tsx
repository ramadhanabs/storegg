import Sidebar from '../../../components/organisms/Sidebar';
import TransactionMemberDetail from '../../../components/organisms/TransactionMemberDetail';

export default function Detail() {
  return (
    <div>
      <section className="transactions-detail overflow-auto">
        <Sidebar active="transactions" />
        <TransactionMemberDetail />
      </section>
    </div>
  );
}
