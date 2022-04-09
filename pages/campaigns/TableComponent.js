import React, { useState } from "react";
import { Accordion, Icon, Table } from "semantic-ui-react";

const TableComponent = (props) => {
  const { transcationsList } = props;
  const [active, setActive] = useState(false);

  const renderTableData = () => {
    return transcationsList.map((transcation) => {
      const { from, isError, timeStamp, value } = transcation;
      const sucess = parseInt(isError) ? "False" : "True";
      return (
        <Table.Row>
          <Table.Cell>{from}</Table.Cell>
          <Table.Cell>{sucess}</Table.Cell>
          <Table.Cell>{timeStamp}</Table.Cell>
          <Table.Cell>{value}</Table.Cell>
        </Table.Row>
      );
    });
  };

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  if (!(transcationsList || []).length) return null;

  return (
    <Accordion
      style={{
        marginLeft: "12rem",
        width: "75%",
        backgroundColor: "black",
        borderRadius: "1rem",
      }}
    >
      <Accordion.Title
        active={active}
        index={0}
        onClick={handleClick}
        style={{
          color: "white",
          textTransform: "capitalize",
          fontSize: "larger",
        }}
      >
        <Icon name="dropdown" />
        Transaction Table
      </Accordion.Title>
      <Accordion.Content active={active} style={{ paddingBottom: "2rem" }}>
        <Table inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>From</Table.HeaderCell>
              <Table.HeaderCell>Success</Table.HeaderCell>
              <Table.HeaderCell>Timestamp</Table.HeaderCell>
              <Table.HeaderCell>Amount Transfer(WEI)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{renderTableData()}</Table.Body>
        </Table>
      </Accordion.Content>
    </Accordion>
  );
};

export default TableComponent;
