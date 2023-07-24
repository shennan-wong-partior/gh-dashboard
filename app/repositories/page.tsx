'use client';

import {
  Card,
  Metric,
  Text,
  Badge,
  Bold,
  Title,
  BarList,
  Flex,
  Grid,
  Col,
  List,
  ListItem,
  Icon,
  Color
} from '@tremor/react';

import {
  BriefcaseIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  HomeIcon,
  TruckIcon,
  DocumentDuplicateIcon,
  CogIcon
} from '@heroicons/react/24/solid';

type MetricTypes = {
  label: string;
  value: string | number;
  color: Color;
  icon: any;
};

const qualityMetrics: MetricTypes[] = [
  {
    label: 'Code Quality',
    value: 'A',
    color: 'lime',
    icon: HomeIcon
  },
  {
    label: 'Issues',
    value: '1%',
    color: 'red',
    icon: ShieldExclamationIcon
  },
  {
    label: 'Complexity',
    value: '2%',
    color: 'red',
    icon: CogIcon
  },
  {
    label: 'Duplication',
    value: '11%',
    color: 'amber',
    icon: DocumentDuplicateIcon
  },
  {
    label: 'Coverage',
    value: '74.5%',
    color: 'amber',
    icon: BriefcaseIcon
  }
];

export default function RepositoriesPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card>
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
          {/* main */}
          <Card>
            <Text>Repository</Text>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-3 truncate"
            >
              <Metric>gh-controller-dapps</Metric>
              <Text>link</Text>
            </Flex>
            <Text>
              This is a description for the repo `gh-controller-dapps`.
            </Text>
            <Flex justifyContent="start" className="space-x-2 mt-4">
              <Text>
                <span className="badge badge-lg badge-ghost">
                  Anthony Yeong
                </span>
              </Text>
              <Text>{new Date().toDateString()}</Text>
            </Flex>
          </Card>

          {/* codacy */}
          <Card>
            <Text>Codacy</Text>
            <Flex justifyContent="start" className="space-x-2 mt-4">
              <List className="mt-4">
                {qualityMetrics.map((metrics) => (
                  <ListItem key={metrics.label}>
                    <Flex justifyContent="start" className="truncate space-x-4">
                      <Icon
                        variant="light"
                        icon={metrics.icon}
                        size="md"
                        color={metrics.color}
                      />
                      <div className="truncate">
                        <Text className="truncate">
                          <Bold>{metrics.label}</Bold>
                        </Text>
                      </div>
                    </Flex>
                    <Badge size="md" color={metrics.color}>
                      {metrics.value}
                    </Badge>
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Card>

          {/* branch metrics */}
          <Card>
            <Text>Branch Metrics</Text>
            <Metric>KPI 2</Metric>
          </Card>

          <Card>
            <Text>Title</Text>
            <Metric>KPI 4</Metric>
          </Card>

          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 5</Metric>
            </Card>
          </Col>
        </Grid>
      </Card>
    </main>
  );
}
