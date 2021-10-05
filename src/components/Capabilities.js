import React, { Component } from 'react';

import './Capabilities.css'



class Capabilities extends Component {
  render() {
    return (
      <div className="capabilities-container">
        <div className="capabilities-cards">
          <div className="capabilities-card">
            <h6>Front-end</h6>
            <br />
            <p>HTML 5 | XML | JavaScript | ES2020 | AJAX | jQuery 3.5.1 | Single Page Applications | React | React Native | Redux | Rest API | CSS 4 | Bootstrap 4.5 | Responsive Web Design</p>
          </div>
          <div className="capabilities-card">
            <h6>Back-end</h6>
            <br />
            <p>C# | PHP | Python | Express | Node | Entity Framework | MongoDB | GraphQL | Microsoft SQL Server | MySQL| PostgreSQL | .NET 4.8 | ASP.NET:AJAX|MVC|Web Api</p>
          </div>
          <div className="capabilities-card">
            <h6>Miscellaneous</h6>
            <br />
            <p>git | GitHub | GitHub Pages | Object-Orient Programming | WordPress | WooCommerce | Avada | Google Analytics | Google Tag Manager | Software Development Life Cycle | Agile Methodologies: Kanban | Scrum | JIRA | Confluence</p>
          </div>
          <div className="capabilities-card">
            <h6>Amazon Web Services</h6>
            <br />
            <p>Management Console | CLI | SDKs | Infrastructure | Shared Responsibility Model | Suport Plans | Well-Architected Framework (Security, Reliability, Operational Excellence, Cost Optimization, Performance Efficiency) | Compute/Storage (EBS, EC2, ECR, EFS, S3, Elastic Beanstalk, Lambda) | Cost Management (Cist Explorer, Budgets, Cost and Usage Report, RI Reporting)  | Database (Aurora, DynamoDB, RDS, Redshift) | Management and Governance (Auto Scaling, CloudFormation, CloudTrail, CloudWatch, Config, Personal Health Dashboard, Service Catalog, Systems Manager, Trusted Advisor) | Network and COntent Delivery (CloudFront, Direct Connect, Elastic Load Balancing, Route 53, VPC</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Capabilities;
