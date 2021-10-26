import Sidebar from '../../../components/organisms/Sidebar';
import TransactionContent from '../../../components/organisms/TransactionMember';

export default function Transactions() {
  return (
    <div>
      <section className="transactions overflow-auto">
        <Sidebar active="transactions" />
        <TransactionContent />
      </section>
    </div>
  );
}
