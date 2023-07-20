'use client';


import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';

// export const dynamic = 'force-dynamic';

export default async function IndexPage() {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={[]} />
      </Card>
    </main>
  );
}
