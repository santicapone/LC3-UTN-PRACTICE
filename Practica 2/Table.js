const returnCompanyData = (data) => {
  return data.map((company) => (
    <tr>
      <td>{company.brand}</td>
      <td>{company.income}</td>
    </tr>
  ));
};

const incomeAverage = (data) => {
  return (
    data
      .map((total) => total.income)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    data.length
  ).toFixed(2);
};

const Table = ({ data }) => {
  return (
    <div className="Table">
      <div>
        <table>
          <tr>
            <th>Company</th>
            <th>Income</th>
          </tr>
          {returnCompanyData(data)}
        </table>
      </div>
      <div>
        <p>Income average = ${incomeAverage(data)}</p>
      </div>
    </div>
  );
};

export default Table;
