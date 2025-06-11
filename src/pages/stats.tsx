import React from 'react';
import { Title, Table, Mark } from '@mantine/core';
import {
  NavPageLayout,
  NavPageLayoutProps,
  getNavPageLayoutPropsFromConfig,
} from '@gen3/frontend';
import { GetServerSideProps } from 'next';

const StatsPage = ({ headerProps, footerProps }: NavPageLayoutProps) => {
  const elements = [
    {
      "source": "GDC",
      "cohortStudy": "APOLLO LUAD",
      "description": "Genomics",
      "type": "API",
      "status": "GREEN",
      "patients": "100/100"
    },
    {
      "source": "PDC",
      "cohortStudy": "APOLLO LUAD",
      "description": "Proteomics",
      "type": "API",
      "status": "GREEN",
      "patients": "100/100"
    },
    {
      "source": "GDC",
      "cohortStudy": "APOLLO OV",
      "description": "Genomics",
      "type": "API",
      "status": "RED",
      "patients": "0/…"
    },
    {
      "source": "PDC",
      "cohortStudy": "APOLLO OV",
      "description": "Proteomics",
      "type": "API",
      "status": "GREEN",
      "patients": ""
    },
    {
      "source": "Windber",
      "cohortStudy": "APOLLO 5",
      "description": "Clinical Metadata",
      "type": "API",
      "status": "ORANGE",
      "patients": ""
    },
    {
      "source": "Windber",
      "cohortStudy": "APOLLO 5",
      "description": "Clinical Detailed",
      "type": "API",
      "status": "ORANGE",
      "patients": ""
    },
    {
      "source": "Windber",
      "cohortStudy": "PROMETHEUS 8A",
      "description": "Clinical Metadata",
      "type": "API",
      "status": "ORANGE",
      "patients": ""
    },
    {
      "source": "PNNL",
      "cohortStudy": "PROMETHEUS 8A",
      "description": "Proteomics",
      "type": "S3 Upload",
      "status": "ORANGE",
      "patients": ""
    },
    {
      "source": "Ellison",
      "cohortStudy": "PROMETHEUS 8A",
      "description": "Metabolomics",
      "type": "S3 Upload",
      "status": "ORANGE",
      "patients": ""
    },
    {
      "source": "TCIA",
      "cohortStudy": "APOLLO 5",
      "description": "Images",
      "type": "API",
      "status": "ORANGE",
      "patients": ""
    },
    {
      "source": "TCIA",
      "cohortStudy": "VA-REPOP",
      "description": "Images",
      "type": "API",
      "status": "GREEN",
      "patients": "32/812"
    },
    {
      "source": "VPODC",
      "cohortStudy": "VA-REPOP",
      "description": "Longitudinal clinical, targeted sequencing",
      "type": "API",
      "status": "GREEN",
      "patients": "265/812"
    },
    {
      "source": "VPODC",
      "cohortStudy": "VABio/ APOLLO 5/ Prometheus 8A",
      "description": "Longitudinal clinical, targeted sequencing",
      "type": "API",
      "status": "ORANGE",
      "patients": ""
    }
  ];
  type BgColorsType = {[key: string]: string};
  const bgColors: BgColorsType = {
    GREEN: 'bg-green-100',
    ORANGE: 'bg-orange-100',
    RED: 'bg-red-100',
  };
  const rows = elements.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{element.source}</Table.Td>
      <Table.Td>{element.cohortStudy}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td className={bgColors[element.status]}>{element.status}</Table.Td>
      <Table.Td>{element.patients}</Table.Td>
    </Table.Tr>
  ));
  return (
    <NavPageLayout
      {...{ headerProps, footerProps }}
      headerData={{
        title: 'Stats',
        content: 'Stats',
        key: 'gen3-stats-page',
      }}
    >
      <div className="w-full m-10">
        <Title order={1}>Stats</Title>
        <Table striped tabularNums withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Source</Table.Th>
              <Table.Th>Cohort / Study</Table.Th>
              <Table.Th>Data Description</Table.Th>
              <Table.Th>Connection Type</Table.Th>
              <Table.Th>Connection Status</Table.Th>
              <Table.Th># Patients Available/Expected</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <p><Mark className={bgColors.GREEN}>Green color</Mark>: connection established with real data</p>
        <p><Mark className={bgColors.ORANGE}>Orange color</Mark>: connection estabilished with test data</p>
        <p><Mark className={bgColors.RED}>Red color</Mark>: connection not working/connection pending?</p>
      </div>
    </NavPageLayout>
  );
};

// TODO: replace this with a custom getServerSideProps function
export const getServerSideProps: GetServerSideProps<
  NavPageLayoutProps
> = async () => {
  return {
    props: {
      ...(await getNavPageLayoutPropsFromConfig()),
    },
  };
};

export default StatsPage;
