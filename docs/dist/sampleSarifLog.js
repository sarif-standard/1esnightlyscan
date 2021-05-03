export const sarifLogZeroResults = {
  version: "2.1.0",
  runs: [{
    tool: {
      driver: {
        name: "Sample Tool"
      }
    },
    versionControlProvenance: [
      {
        properties: {
          isDisabled: false
        }
      }
    ]
  }]
};
export const sarifLogSomeResults = {
  $schema: "https://schemastore.azurewebsites.net/schemas/json/sarif-2.1.0-rtm.5.json",
  version: "2.1.0",
  runs: [
    {
      tool: {
        driver: {
          name: "Request Failure",
          rules: [
            {
              id: "BACKEND/001",
              name: "BackendFailure",
              messageStrings: {
                Default: {
                  text: "Invalid request arguments: "
                }
              },
              helpUri: "https://aka.ms/1esnightlyscan"
            }
          ]
        }
      },
      invocations: [
        {
          executionSuccessful: true
        }
      ],
      results: [
        {
          ruleId: "BACKEND/001",
          ruleIndex: 0,
          level: "error",
          message: {
            id: "Default"
          },
          locations: [
            {
              physicalLocation: {
                artifactLocation: {
                  uri: "https://sarif-pattern-matcher-internal-function.azurewebsites.net/api/query?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiI0OTliODRhYy0xMzIxLTQyN2YtYWExNy0yNjdjYTY5NzU3OTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNjE5NzE5OTgwLCJuYmYiOjE2MTk3MTk5ODAsImV4cCI6MTYxOTcyMzg4MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQTdYOXh0UVhvWkZ0L0kwUkl6RjNxVFdKUU5QdzFEeEl6M2R6Wld1cmg0bzlJUElMZ0JEVmVUUkVFK0VQNjA4angzUmZ3MHVuRzlIbDU1KzZwRkxCckw1ZHpnRk1qTHJERE4xellwamVFRUY0PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIxNmFjZjU5NS01NDQyLTRiNGItODQ1MC04OGI2ZWJmYzA5OGIiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IktpbmciLCJnaXZlbl9uYW1lIjoiSmVmZiIsImlwYWRkciI6IjYzLjIzNy4yMjkuOTgiLCJuYW1lIjoiSmVmZiBLaW5nIChURUtzeXN0ZW1zIEluYykiLCJvaWQiOiI0ZjA4ODdkOC1iYmYzLTQ5ODEtYWFjNS1mNDE4OGVkZGUxNWMiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjEyNzUyMTE4NC0xNjA0MDEyOTIwLTE4ODc5Mjc1MjctNDQ1Njk4NTAiLCJwdWlkIjoiMTAwMzIwMDBEQTJENDBDMiIsInJoIjoiMC5BUm9BdjRqNWN2R0dyMEdScXkxODBCSGJSNVgxckJaQ1ZFdExoRkNJdHV2OENZc2FBTDQuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiUUNsYXoxQktIYktvS0tFUWNKQVBJNFdRSlZod29DMEpwcW1BLS1wcmhNMCIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoidi1qZWZraUBtaWNyb3NvZnQuY29tIiwidXBuIjoidi1qZWZraUBtaWNyb3NvZnQuY29tIiwidXRpIjoiZmlDUE5BQlcxMHkwUHpGSkU4SWRBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.Cngf1EnmloUCVEtNvokaGP3TkHOfEaNJ8M6ipAoxCyXjdtzRwChGeeLXjrKSt4eIq8H1F5EnWLgCa3KY735jtDNKXG07U5NKuICInmBXZlUYjC2Yq0AhzyAR4QXgxMN-NTVqo-weKWGexHtONAgVy_Xye6HjGX4SPgL1LaH9hu697dMqbSXx5EDrZnZRfdNKhfulQ73LmEXEYzjtUUJMMSkYQWekaTw1_IAlDKmwOXKHa3zMHoyoWCSfkMCwp1SxQrMd07lJQktO_AI0wjekZbUG-KVB2GcImUyEK9YPcowRDHQ53IzHxVq7v8XxAo_RzUCdT-wraaWhzcDyKPy2sg"
                }
              }
            }
          ]
        }
      ],
      columnKind: "utf16CodeUnits"
    }
  ]
};
