import Head from "next/head";
import Card from "../components/MemberCard/index";

import { MembersData } from "../components/MemberCard/MembersData"

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Nextsheet 💩</title>
        <meta
          name="description"
          content="Connecting NextJS with Google Spreadsheets as Database"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Nextsheet 💩</h1>
        <p>Connecting NextJS with Google Spreadsheets as Database</p>
        <p>Example fetched from Google Spreadsheet: </p>
        <ul>
          {/**
          {MembersData.map((item) => (
            <li key={item.registration}>{item.name}</li>
          ))}
          */}

          {MembersData.map((item) => (
            <Card key={item.registration} member={item} />
          ))}
        </ul>

      <ul style={{listStyle: 'decimal', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {MembersData.map((item) => (
          <li key={item.registration}>{item.name}</li>
        ))}
      </ul>

        {/**
        <ul>
          {MembersData.map((item) => (
              <li key={item.registration} >
                <p>{`{`}</p>
                <p>name: '{item.name}',</p>
                <p>registration: '{item.registration}',</p>
                <p>document: '{item.document}',</p>
                <p>class: '{item.class}',</p>
                <p>imageUrl: '{item.imageUrl}',</p>
                <p>},</p>
              </li>
            ))
          }
        </ul>
         */}
        <h2>Setting up environment variables</h2>
        <code>GOOGLE_SHEETS_PRIVATE_KEY=[YOUR KEY]</code>
        <br />

        <code>GOOGLE_SHEETS_CLIENT_EMAIL=[YOUR ACCOUNT EMAIL]</code>
        <br />
        <code>SPREADSHEET_ID=[YOU CAN GET THIS ON URL OF YOUR SHEETS]</code>
        <br />
        <code>SPREADSHEET_NAME=[SHEET NAME]</code>
        <p>
          <a href="https://github.com/lucasromerodb/nextsheet">GitHub repo »</a>
          <br />
        </p>
      </main>
    </>
  );
}