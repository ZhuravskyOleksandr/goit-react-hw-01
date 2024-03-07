import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.tableHeadCell}>Type</th>
                    <th className={css.tableHeadCell}>Amount</th>
                    <th className={css.tableHeadCell}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => 
                <tr className={css.tableRow} key={id}>
                    <td className={css.tableBodyCell}>{type}</td>
                    <td className={css.tableBodyCell}>{amount}</td>
                    <td className={css.tableBodyCell}>{currency}</td>
                </tr>
                )}
            </tbody>
        </table>
    );
}