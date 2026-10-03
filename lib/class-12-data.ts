import {
  Database,
  Table,
  Key,
  Network,
  Server,
  Binary,
  GitCommit,
  FileText,
  Boxes,
  Layers,
  Code2,
  Share2,
} from 'lucide-react';

export type Class12InteractiveType =
  | 'data-vs-information'
  | 'database-history'
  | 'database-types'
  | 'file-system-vs-dbms'
  | 'dbms-architecture'
  | 'fields-records-tables'
  | 'database-keys'
  | 'database-models'
  | 'er-diagram-builder'
  | 'sql-sublanguages';

export type Class12Topic = {
  id: string;
  title: string;
  definition: string;
  simpleExplanation: string;
  interactiveType: Class12InteractiveType;
  keyPoints?: string[];
  advantages?: string[];
  disadvantages?: string[];
  examples?: string[];
  diagramLabel?: string;
};

export type Class12Chapter = {
  id: string;
  title: string;
  icon: any;
  color: string;
  description: string;
  category: 'database' | 'networking' | 'c-programming';
  topics: Class12Topic[];
};

export const class12Chapters: Class12Chapter[] = [
  {
    id: 'dbms-foundations',
    title: 'Database Management System (DBMS)',
    icon: Database,
    color: 'from-emerald-500 to-teal-400',
    description: 'Master core database concepts, data models, keys, ER diagrams, and SQL architecture',
    category: 'database',
    topics: [
      {
        id: 'data-vs-information',
        title: 'Data vs Information & The Need for Databases',
        definition:
          'Data refers to unorganized, raw facts, figures, symbols, or observations that lack context (e.g., numbers, names, sensor readings). Information is data that has been processed, structured, categorized, and interpreted to provide meaningful context, enabling decision-making. The transition from data to information occurs via the Data Processing Cycle (Input → Processing → Output → Storage).',
        simpleExplanation:
          'Think of data as raw ingredients (flour, sugar, eggs) — alone, you cannot eat them. Information is the baked, frosted cake ready to eat. A database is like an organized commercial kitchen where ingredients are safely kept, recipes are followed, and delicious meals are made instantly on demand!',
        keyPoints: [
          'Data is atomic and devoid of context (e.g., "104" could be a room number, fever temperature, or test score).',
          'Information adds meaning, semantics, and purpose (e.g., "Patient fever is 104°F, requiring immediate medication").',
          'Data Processing Cycle: Collection (Input) → Manipulation/Sorting (Processing) → Reports (Output) → Permanent Preservation (Storage).',
          'Why Databases are Essential: Manual paperwork leads to misplacement, physical damage, human arithmetic errors, and impossible search speeds when records number in the millions.',
        ],
        advantages: [
          'High decision-making accuracy: Structured information drives evidence-based decisions in medicine, governance, and business.',
          'Instant retrieval: Computerized queries find a single record among billions in milliseconds.',
          'Scalability: Modern databases effortlessly scale from megabytes to petabytes of historical records.',
        ],
        disadvantages: [
          'Garbage In, Garbage Out (GIGO): If inaccurate raw data is entered, the generated information will be false and misleading.',
          'Processing overhead: Transforming raw unstructured logs into structured intelligence requires computational hardware.',
          'Data loss risk without backups: Digital data corrupted without backups is permanent and unrecoverable.',
        ],
        examples: [
          'Raw Data: [42, "Sita", "Pass", 89, 78, 92]',
          'Information: "Student Sita (Roll No. 42) achieved an average grade of 86.3% and Passed with Distinction."',
        ],
        interactiveType: 'data-vs-information',
        diagramLabel: 'Data Processing Pipeline: Raw Facts → Analytical Processing → Actionable Information',
      },
      {
        id: 'what-is-database-history',
        title: 'What is a Database & History of Databases',
        definition:
          'A Database is an organized, systematically curated collection of logically related data stored electronically in a computer system so that it can be easily accessed, managed, modified, searched, and updated. The evolution spans: 1960s Flat Files & Hierarchical/Network systems (IBM IMS, CODASYL) → 1970 Edgar F. Codd’s Relational Model paper → 1980s SQL standardization → 2000s NoSQL & Big Data → 2010s+ Cloud & Distributed NewSQL.',
        simpleExplanation:
          'Imagine an ancient library where scrolls were stacked randomly on the floor — finding anything took days! A database is a modern automated library where every book has a digital barcode, slot number, and instant computer search catalog.',
        keyPoints: [
          'Database = Systematic collection of interrelated data + metadata (data dictionary describing structure).',
          '1960s: Hierarchical Model (tree structure) & Network Model (graph structure) used on punch-card mainframes.',
          '1970: Dr. Edgar F. Codd published "A Relational Model of Data for Large Shared Data Banks" introducing tabular relations.',
          '1980s: SQL (Structured Query Language) became the universal ANSI/ISO standard for querying databases.',
          '2000s–Present: NoSQL (MongoDB, Redis) and Distributed NewSQL (Google Spanner, CockroachDB) power planetary scale web apps.',
        ],
        advantages: [
          'Centralized repository: Eliminates isolated information islands across company departments.',
          'High concurrent accessibility: Millions of users can book flight tickets simultaneously without conflicts.',
          'Standards compliance: Unified data formats enforce organization-wide policies and auditing.',
        ],
        disadvantages: [
          'Single point of failure: If a centralized database crashes and has no failover replica, operations halt.',
          'Significant investment: Enterprise licenses (Oracle, Microsoft SQL Server) and database administrators (DBAs) are expensive.',
          'Continuous maintenance: Requires regular index optimization, vacuuming, patch updates, and security audits.',
        ],
        examples: [
          'Commercial Banking: Core banking databases tracking deposits, withdrawals, and interest for 50 million customers.',
          'Aviation: Global Distribution Systems (Sabre, Amadeus) managing real-time seat inventory across international airlines.',
        ],
        interactiveType: 'database-history',
        diagramLabel: 'Historical Evolution Timeline: 1960s Mainframes to 2020s Cloud Distributed NewSQL',
      },
      {
        id: 'database-types',
        title: 'Types of Databases (Relational vs NoSQL vs Distributed)',
        definition:
          'Modern databases are categorized by data model and deployment: Relational Databases (RDBMS) store structured tables with strict schemas and ACID compliance (MySQL, PostgreSQL, Oracle). NoSQL Databases store unstructured/semi-structured flexible data across 4 models: Document (JSON/MongoDB), Key-Value (Redis), Column-Family (Cassandra), and Graph (Neo4j). Distributed Databases replicate data across geographical clusters for high availability.',
        simpleExplanation:
          'RDBMS is like a strict Excel spreadsheet where every row must have the exact same columns. NoSQL is like a flexible digital notebook where each page can have different sticky notes, photos, bullet points, or tags depending on what you need!',
        keyPoints: [
          'Relational (RDBMS): Uses tables (relations) with rows and columns; enforces primary/foreign key constraints.',
          'Document NoSQL (MongoDB): Stores JSON-like documents; ideal for content management and dynamic catalogs.',
          'Key-Value NoSQL (Redis): Ultra-fast in-memory lookup by key; ideal for user sessions, leaderboards, and caching.',
          'Graph NoSQL (Neo4j): Stores nodes and edges; ideal for social networks, fraud detection, and recommendation engines.',
          'Cloud Distributed: Shards and replicates partitions across multiple data centers worldwide.',
        ],
        advantages: [
          'RDBMS Advantages: Uncompromising ACID transactions, mathematical relational integrity, and standard SQL.',
          'NoSQL Advantages: Dynamic schema evolution, horizontal partition scaling, and blazing throughput for big data.',
          'Specialized matching: Developers can choose the exact database engine tailored to the problem (Polyglot Persistence).',
        ],
        disadvantages: [
          'RDBMS Limitations: Difficult horizontal auto-scaling (sharding requires complex operational tooling).',
          'NoSQL Limitations: Sacrifices ACID for BASE (Eventual Consistency); lacks complex multi-table SQL JOINs.',
          'High architectural complexity: Managing polyglot database clusters requires extensive DevOps expertise.',
        ],
        examples: [
          'E-Commerce site: PostgreSQL for checkout and billing (ACID), MongoDB for product catalogs, and Redis for shopping cart session cache.',
        ],
        interactiveType: 'database-types',
        diagramLabel: 'Taxonomy of Modern Databases: Relational vs Key-Value vs Document vs Graph',
      },
      {
        id: 'file-vs-dbms',
        title: 'Traditional File Systems vs DBMS (Fields, Records & Files)',
        definition:
          'A traditional file system organizes data into flat files containing records (rows) and fields (attributes) managed directly by the operating system. This architecture suffers from severe drawbacks: Data Redundancy (duplicate storage), Data Inconsistency, Program-Data Dependence (code breaks if file format changes), Lack of Concurrent Access Control, and Inadequate Security. A DBMS solves these by decoupling physical storage from logical schema.',
        simpleExplanation:
          'In a file system, the Admissions office, Library, and Sports club each keep their own separate text file for students. When a student changes their home address, the library file might update but the sports file stays outdated (Inconsistency!). A DBMS gives everyone one single live master database.',
        keyPoints: [
          'Hierarchy of Data: Bit (0/1) → Byte/Character → Field (Attribute) → Record (Tuple) → File (Table) → Database.',
          'Data Redundancy: Same student name duplicated across Registrar, Hostel, and Accounts files.',
          'Data Inconsistency: Discrepancy between files after an uncoordinated update.',
          'Program-Data Dependence: If a programmer expands telephone number from 8 to 10 digits, every program reading that file crashes.',
          'Concurrency Anomalies: Two bank clerks simultaneously updating the same account in a file system overwrite each other\'s balance.',
        ],
        advantages: [
          'File System Pros: Extremely simple, zero license cost, built directly into every OS, and fast for small static text files.',
          'DBMS Pros: Complete elimination of uncontrolled redundancy, programmatic data independence, and ACID transactions.',
        ],
        disadvantages: [
          'File System Cons: Fatal data corruption during unexpected power cuts; no automated transaction rollback.',
          'File System Security: OS permissions are crude (file-level read/write); cannot restrict access to individual columns like salary.',
        ],
        examples: [
          'File System: "students.csv", "library_loans.txt", "fees.dat" updated manually with custom Python/C scripts.',
          'DBMS: Centralized relational server running foreign keys and view permissions.',
        ],
        interactiveType: 'file-system-vs-dbms',
        diagramLabel: 'File Processing Isolation vs Centralized Database Architecture Comparison',
      },
      {
        id: 'dbms-overview',
        title: 'DBMS Architecture & Three-Schema Framework',
        definition:
          'A Database Management System (DBMS) is software that interacts with end-users, applications, and the database itself to capture and analyze data. The ANSI/SPARC 3-Schema Architecture separates the database into 3 independent abstraction layers: 1) External / View Level (custom user views), 2) Conceptual / Logical Level (all entities, relationships, constraints), and 3) Internal / Physical Level (file storage structures, B-Trees, disk blocks). This achieves Physical and Logical Data Independence.',
        simpleExplanation:
          'Think of a bank: The Teller sees an account screen with your balance (External View). The Bank Manager sees the entire database schema connecting loans, accounts, and fraud alerts (Conceptual Level). The Systems Engineer sees hard drives, magnetic tapes, and encrypted disk sectors (Internal Level). Changing hard drives does not change what the teller sees!',
        keyPoints: [
          'Physical Data Independence: The physical storage (SSD, B-Tree indexes, partition hashing) can change without altering the conceptual schema.',
          'Logical Data Independence: The conceptual schema can be modified (adding a new table or column) without breaking existing external views or user queries.',
          'Data Abstraction hides low-level storage details from developers and end-users.',
          'Core DBMS Components: Query Optimizer, Storage Engine, Transaction Manager, Concurrency Control, Recovery Manager.',
        ],
        advantages: [
          'Controlled Data Redundancy: Data is recorded once and referenced across all applications.',
          'Enforced Integrity Constraints: Rules (e.g., Age >= 18, Balance > 0) are strictly enforced at the database level.',
          'Multi-User Concurrency Control: Allows thousands of transactions simultaneously using Two-Phase Locking (2PL) and MVCC.',
          'Automated Recovery: Write-Ahead Logging (WAL) restores database to a consistent state following sudden hardware crashes.',
        ],
        disadvantages: [
          'High software acquisition costs: Enterprise DBMS engines and support contracts run into tens of thousands of dollars.',
          'Substantial hardware footprint: Requires dedicated database servers with abundant RAM, NVMe arrays, and standby servers.',
          'Organizational complexity: Demands certified Database Administrators (DBA) to tune performance, handle migrations, and manage backups.',
        ],
        examples: [
          'External View: A student portal only displays roll number and exam marks; the database column containing fee arrears or health notes is concealed.',
        ],
        interactiveType: 'dbms-architecture',
        diagramLabel: 'ANSI/SPARC 3-Schema Architecture: External Views → Conceptual Schema → Internal Storage',
      },
      {
        id: 'relational-concepts',
        title: 'Relational Database Concepts (Fields, Records, Tables & Objects)',
        definition:
          'The Relational Model represents data as Relations (Tables). A Table consists of Rows (Tuples / Records) and Columns (Attributes / Fields). The Degree of a relation is the number of attributes (columns), and Cardinality is the number of tuples (rows). The Domain is the set of all permissible atomic values for a given attribute. Key database objects include Tables, Views (virtual tables generated by queries), Indexes (search acceleration B-Trees), Triggers, and Stored Procedures.',
        simpleExplanation:
          'A table is a neat grid. Each vertical column (field) is a property like "Student Name" or "Birth Date". Each horizontal row (record/tuple) represents one real human student. The number of students enrolled is the Cardinality, and the number of columns in the register is the Degree.',
        keyPoints: [
          'Relation = Table. Tuple = Record / Row. Attribute = Field / Column.',
          'Cardinality = Total number of tuples (rows) currently stored in the relation.',
          'Degree = Total number of attributes (columns) defining the relation schema.',
          'Domain = Specified data type and constraint range for an attribute (e.g., Age domain: Integers 1-120).',
          'Views: Stored SQL queries acting as virtual tables without duplicating data; protects sensitive columns.',
          'Indexes: Auxiliary data structures (B+ Trees, Hash maps) providing rapid row retrieval without full table scans.',
        ],
        advantages: [
          'Mathematical purity: Grounded in First-Order Predicate Logic and Relational Algebra.',
          'Declarative access: Users specify WHAT data they want with SQL; the DBMS determines HOW to retrieve it efficiently.',
          'Views enhance security: Conceals confidential fields (e.g., credit card CVV) while letting analysts query remaining columns.',
        ],
        disadvantages: [
          'Object-Relational Impedance Mismatch: Translating object-oriented code classes into relational tables requires ORM layers (Hibernate, Prisma).',
          'Index storage overhead: Indexes speed up `SELECT` reads but slow down `INSERT`, `UPDATE`, and `DELETE` writes.',
        ],
        examples: [
          'Relation STUDENTS(RollNo, Name, Grade, City) has Degree = 4.',
          'If there are 50 enrolled student rows, Cardinality = 50.',
        ],
        interactiveType: 'fields-records-tables',
        diagramLabel: 'Relational Anatomy: Table Schema, Tuples, Attributes, Degree & Cardinality',
      },
      {
        id: 'database-keys',
        title: 'Database Keys (Primary, Foreign, Candidate & Super Keys)',
        definition:
          'Keys are attributes or sets of attributes used to uniquely identify tuples in a relation and establish referential relationships between tables. Types: Super Key (any attribute set that uniquely identifies rows), Candidate Key (minimal super key without redundant attributes), Primary Key (the chosen candidate key; must be unique and NOT NULL), Alternate Key (candidate keys not chosen as primary), Foreign Key (attribute in a table matching the Primary Key of another table, ensuring Referential Integrity), and Composite Key (primary key composed of multiple attributes).',
        simpleExplanation:
          'Your country issues you a unique Citizenship ID or Passport Number — no two citizens ever share the same number. That is a Primary Key! When a hospital writes your Citizenship ID on your medical chart, that ID becomes a Foreign Key pointing back to the national citizen registry.',
        keyPoints: [
          'Primary Key: Must be UNIQUE and cannot contain NULL values (Entity Integrity Rule).',
          'Candidate Key: Minimal attribute set capable of becoming the Primary Key.',
          'Super Key: Any combination that uniquely identifies a row (even if it has unnecessary extra columns).',
          'Foreign Key: Enforces Referential Integrity — values must either match an existing parent key or be NULL.',
          'Composite Key: Combines 2 or more columns (e.g., CourseID + SemesterID) to create a unique identifier.',
        ],
        advantages: [
          'Guarantees Entity Integrity: Prevents duplicate record entries (no duplicate student roll numbers).',
          'Referential Integrity: Prevents orphan child records (cannot enroll a student into a non-existent course).',
          'Automatic high-speed indexing: Primary Keys are automatically clustered and indexed by the database engine.',
        ],
        disadvantages: [
          'Cascading update/delete risks: Deleting a primary key record can inadvertently wipe linked child records if `ON DELETE CASCADE` is set.',
          'Composite key complexity: Primary keys composed of 3+ columns waste storage in foreign key references and complicate joins.',
        ],
        examples: [
          'Table STUDENTS: Candidate keys are {StudentID} and {Email}. We select {StudentID} as Primary Key; {Email} becomes Alternate Key.',
          'Table ENROLLMENTS: Has Foreign Key {StudentID} referencing STUDENTS({StudentID}).',
        ],
        interactiveType: 'database-keys',
        diagramLabel: 'Key Hierarchy: Super Key ⊃ Candidate Key ⊃ Primary Key + Foreign Key Relationships',
      },
      {
        id: 'database-models',
        title: 'Database Models (Hierarchical, Network, Relational & Object-Oriented)',
        definition:
          'A Data Model is an abstract framework defining how data is structured, stored, interconnected, and manipulated. The 4 classic models: 1) Hierarchical Model (tree structure with 1:N parent-child nodes; IBM IMS), 2) Network Model (graph structure with M:N records and multiple parents; CODASYL), 3) Relational Model (two-dimensional tables linked by keys; Codd), and 4) Object-Oriented Model (stores data as objects containing both state attributes and executable methods).',
        simpleExplanation:
          'Hierarchical is like a biological family tree: one parent has multiple children, but a child only has one biological mother. Network model is like a spider web where children have multiple parents. Relational model replaces webs and trees with clean tabular spreadsheets connected by ID numbers.',
        keyPoints: [
          'Hierarchical Model: Inflexible 1:N tree; deleting a parent node automatically wipes out all children (anomalies).',
          'Network Model: Enables M:N relationships via owner-member sets, but navigation requires complex low-level pointer paths.',
          'Relational Model: Separates data from physical pointers; relationships are dynamically formed using matching field values.',
          'Object-Oriented Database (OODBMS): Directly models complex real-world CAD drawings or game characters with inheritance.',
        ],
        advantages: [
          'Relational: Supreme flexibility, mathematical ad-hoc SQL queries, and zero need for hardcoded memory pointers.',
          'Hierarchical: Blazing performance for strict 1:N nested data (e.g., computer directory file trees).',
          'Object-Oriented: Eliminates ORM friction for nested complex objects and custom data types.',
        ],
        disadvantages: [
          'Hierarchical: Inability to natively represent Many-to-Many (M:N) relationships without massive duplication.',
          'Network: Extremely brittle code; altering database pointers requires rewriting application access programs.',
          'Relational: Complex recursive queries on deep trees require multiple nested joins.',
        ],
        examples: [
          'File System directory (C:\\Users\\Suraj\\Downloads) is a classic Hierarchical tree.',
          'Relational model powers 90%+ of modern enterprise applications (PostgreSQL, MySQL, SQLite).',
        ],
        interactiveType: 'database-models',
        diagramLabel: 'Visual Architecture Comparison: Tree (Hierarchical) vs Web (Network) vs Grid (Relational)',
      },
      {
        id: 'er-model',
        title: 'Entity-Relationship (ER) Model & Diagrams',
        definition:
          'The Entity-Relationship (ER) Model is a conceptual data modeling tool developed by Peter Chen (1976) to visually design database schemas before software implementation. Components: 1) Entities (real-world objects or concepts represented by Rectangles), 2) Attributes (properties represented by Ellipses), and 3) Relationships (associations between entities represented by Diamonds). Cardinality constraints define numerical associations: One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (M:N).',
        simpleExplanation:
          'Before architects build a 50-story skyscraper, they draw blueprints. An ER Diagram is the architectural blueprint for a database! It maps out what things exist (Students, Teachers, Classes), what attributes they have, and how they connect to each other.',
        keyPoints: [
          'Entity: Real-world thing with independent existence (e.g., Student, Car, Course). Represented by a Rectangle.',
          'Weak Entity: Entity whose existence depends on a parent entity (e.g., Dependent of an Employee). Represented by a Double Rectangle.',
          'Attribute Types: Simple (Age), Composite (Full Name = First + Last), Multi-valued (Phone numbers, double ellipse), Derived (Age derived from DOB, dashed ellipse).',
          'Relationship: Association between entities (e.g., Student ENROLLS IN Course). Represented by a Diamond.',
          'Cardinality: 1:1 (Person has one Passport), 1:N (Department has many Employees), M:N (Students enroll in many Courses).',
        ],
        advantages: [
          'Visual communication: Translates complex business rules into an intuitive visual diagram understood by non-programmers.',
          'Direct mapping to tables: Systematic algorithm converts ER diagrams into normalized relational database tables.',
          'Identifies design flaws early: Uncovers missing attributes, circular dependencies, and ambiguous relationships before writing code.',
        ],
        disadvantages: [
          'Lack of execution capability: ER diagrams are purely conceptual diagrams; you cannot run queries directly on an ER diagram.',
          'Schema clutter on large systems: Enterprise databases with 500+ entities produce sprawling, unreadable diagrams.',
        ],
        examples: [
          'Entity: STUDENT with attributes [RollNo (Key), Name, DOB].',
          'Relationship: ENROLLS_IN connecting STUDENT and COURSE with Cardinality M:N.',
        ],
        interactiveType: 'er-diagram-builder',
        diagramLabel: 'Peter Chen ER Diagram Notation: Entity [Rectangle] — Relationship [Diamond] — Attribute [Oval]',
      },
      {
        id: 'sql-sublanguages',
        title: 'SQL Sub-Languages: DDL, DML, TCL & DCL',
        definition:
          'Structured Query Language (SQL) is the standard declarative language for relational database management. SQL commands are categorized into 4 sub-languages based on operational purpose: 1) DDL (Data Definition Language) defines and modifies schema structure (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`), 2) DML (Data Manipulation Language) queries and modifies table data (`SELECT`, `INSERT`, `UPDATE`, `DELETE`), 3) TCL (Transaction Control Language) manages atomic transactions (`COMMIT`, `ROLLBACK`, `SAVEPOINT`), and 4) DCL (Data Control Language) manages security privileges (`GRANT`, `REVOKE`).',
        simpleExplanation:
          'DDL is the carpenter building the wooden shelves (creating tables). DML is the shopkeeper putting cereal boxes on the shelves or taking them off (adding or updating data). TCL is the insurance policy making sure transactions never get half-done. DCL is the security guard deciding who is allowed inside the warehouse.',
        keyPoints: [
          'DDL (Data Definition Language): Auto-committed changes that create or destroy schema containers. Cannot be rolled back in most engines.',
          'DML (Data Manipulation Language): Modifies rows inside tables. Operations execute within a transaction and can be undone with ROLLBACK.',
          'TCL (Transaction Control Language): Implements ACID transaction boundaries: `COMMIT` makes changes permanent, `ROLLBACK` undoes uncommitted work.',
          'DCL (Data Control Language): Enforces the Principle of Least Privilege: `GRANT SELECT ON students TO clerk;`.',
          'TRUNCATE vs DELETE: `DELETE` removes rows one-by-one and logs each deletion; `TRUNCATE` is a DDL command that deallocates entire data pages instantly.',
        ],
        advantages: [
          'Declarative simplicity: You specify what data is needed (`WHERE gpa > 3.5`), not how the disk reads blocks.',
          'ACID transaction guarantees: Guarantees financial transactions never lose money midway through a crash.',
          'Universal career standard: SQL skills are portable across MySQL, Oracle, PostgreSQL, Snowflake, and BigQuery.',
        ],
        disadvantages: [
          'DDL risk: A mistyped `DROP TABLE students;` instantly vaporizes all schema and stored rows.',
          'SQL Injection vulnerability: Poorly sanitized user inputs allow hackers to inject malicious SQL commands.',
        ],
        examples: [
          'DDL: CREATE TABLE Students (ID INT PRIMARY KEY, Name VARCHAR(50));',
          'DML: INSERT INTO Students VALUES (1, "Aarav");',
          'TCL: COMMIT;',
        ],
        interactiveType: 'sql-sublanguages',
        diagramLabel: 'Classification of SQL: DDL (Schema) | DML (Tuples) | TCL (Transactions) | DCL (Privileges)',
      },
    ],
  },
];
