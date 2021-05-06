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
          name: "Live Secrets",
          rules: [
            {
              id: "SEC101/006",
              name: "DoNotExposePlaintextSecrets/GitHubPat"
            }
          ]
        }
      },
      results: [
        {
          ruleId: "SEC101/006",
          level: "error",
          message: {
            text: "'15653102' contains a valid GitHub personal access token (legacy format) (the compromised GitHub account 'foobar ()' has access to the following orgs ''). The subscription backing this Azure resource is associated with the '(Non-Service Based Credential)' The raw data that was scanned for this finding can be viewed [here](https://org.vsrm.visualstudio.com/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/_apis/Release/releases/15653102)."
          },
          locations: [
            {
              physicalLocation: {
                artifactLocation: {
                  uri: "https://org.visualstudio.com/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/_release?_a=releases&view=mine&definitionId=1014"
                },
                region: {
                  startLine: 3849,
                  startColumn: 18,
                  endLine: 3849,
                  endColumn: 80,
                  charOffset: 220631,
                  charLength: 62,
                  snippet: {
                    text: 'gitHubIssueRepoPat": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                  }
                },
                contextRegion: {
                  startLine: 3848,
                  startColumn: 1,
                  endLine: 3850,
                  endColumn: 16,
                  charOffset: 220546,
                  charLength: 165,
                  snippet: {
                    text: '                "gitHubIssueRepoName": "ReliabilityExtensionTest",\r\n                "gitHubIssueRepoPat": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\r\n              }'
                  }
                }
              }
            }
          ],
          fingerprints: {
            "AssetFingerprint/v1": "[platform=github]",
            "GlobalFingerprint/v1": "[secret=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]",
            "ValidationFingerprint/v1": "[secret=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]",
            "ValidationFingerprintHash/v1": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          },
          baselineState: "new",
          rank: 52.68,
          properties: {
            organizationName: "org",
            projectName: "Project",
            projectId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            repositoryName: "",
            repositoryId: ""
          }
        },
        {
          ruleId: "SEC101/006",
          level: "error",
          message: {
            text: "'15545584' contains a valid GitHub personal access token (legacy format) (the compromised GitHub account 'foobar ()' has access to the following orgs ''). The subscription backing this Azure resource is associated with the '(Non-Service Based Credential)' The raw data that was scanned for this finding can be viewed [here](https://org.vsrm.visualstudio.com/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/_apis/Release/releases/15545584)."
          },
          locations: [
            {
              physicalLocation: {
                artifactLocation: {
                  uri: "https://org.visualstudio.com/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/_release?_a=releases&view=mine&definitionId=1014"
                },
                region: {
                  startLine: 3855,
                  startColumn: 18,
                  endLine: 3855,
                  endColumn: 80,
                  charOffset: 220299,
                  charLength: 62,
                  snippet: {
                    text: 'gitHubIssueRepoPat": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                  }
                },
                contextRegion: {
                  startLine: 3854,
                  startColumn: 1,
                  endLine: 3856,
                  endColumn: 16,
                  charOffset: 220214,
                  charLength: 165,
                  snippet: {
                    text: '                "gitHubIssueRepoName": "ReliabilityExtensionTest",\r\n                "gitHubIssueRepoPat": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\r\n              }'
                  }
                }
              }
            }
          ],
          fingerprints: {
            "AssetFingerprint/v1": "[platform=github]",
            "GlobalFingerprint/v1": "[secret=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]",
            "ValidationFingerprint/v1": "[secret=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]",
            "ValidationFingerprintHash/v1": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          },
          baselineState: "new",
          rank: 52.68,
          properties: {
            organizationName: "org",
            projectName: "Project",
            projectId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            repositoryName: "",
            repositoryId: ""
          }
        },
        {
          ruleId: "SEC101/006",
          level: "error",
          message: {
            text: "'14610626' contains a valid GitHub personal access token (legacy format) (the compromised GitHub account 'foobar ()' has access to the following orgs ''). The subscription backing this Azure resource is associated with the '(Non-Service Based Credential)' The raw data that was scanned for this finding can be viewed [here](https://org.vsrm.visualstudio.com/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/_apis/Release/releases/14610626)."
          },
          locations: [
            {
              physicalLocation: {
                artifactLocation: {
                  uri: "https://org.visualstudio.com/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/_release?_a=releases&view=mine&definitionId=1014"
                },
                region: {
                  startLine: 4154,
                  startColumn: 18,
                  endLine: 4154,
                  endColumn: 80,
                  charOffset: 233681,
                  charLength: 62,
                  snippet: {
                    text: 'gitHubIssueRepoPat": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                  }
                },
                contextRegion: {
                  startLine: 4153,
                  startColumn: 1,
                  endLine: 4155,
                  endColumn: 16,
                  charOffset: 233596,
                  charLength: 165,
                  snippet: {
                    text: '                "gitHubIssueRepoName": "ReliabilityExtensionTest",\r\n                "gitHubIssueRepoPat": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\r\n              }'
                  }
                }
              }
            }
          ],
          fingerprints: {
            "AssetFingerprint/v1": "[platform=github]",
            "GlobalFingerprint/v1": "[secret=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]",
            "ValidationFingerprint/v1": "[secret=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]",
            "ValidationFingerprintHash/v1": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          },
          baselineState: "new",
          rank: 52.68,
          properties: {
            organizationName: "org",
            projectName: "Project",
            projectId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            repositoryName: "",
            repositoryId: ""
          }
        }
      ],
      columnKind: "utf16CodeUnits"
    }
  ]
};
