create database Gest_RDV
USE [Gest_RDV]
GO
/** Object:  Table [dbo].[Patient]    Script Date: 03/10/2021 20:44:29 **/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Patient](
	[code_patient] [varchar](50) NOT NULL,
	[nom_patient] [varchar](50) NULL,
	[adresse_patient] [varchar](50) NULL,
	[data_patient] [date] NULL,
	[sexe_patient] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[code_patient] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/** Object:  Table [dbo].[Medcin]    Script Date: 03/10/2021 20:44:29 **/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Medcin](
	[codeMedcin] [varchar](50) NOT NULL,
	[nomMedcin] [varchar](50) NULL,
	[telMedcin] [varchar](50) NULL,
	[dateembauche] [date] NULL,
	[specialiteMedcin] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[codeMedcin] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/** Object:  Table [dbo].[rdv]    Script Date: 03/10/2021 20:44:29 **/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[rdv](
	[numerordv] [int] NOT NULL,
	[daterdv] [date] NULL,
	[heurerdv] [varchar](50) NULL,
	[code_patient] [varchar](50) NULL,
	[codeMedcin] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[numerordv] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/** Object:  ForeignKey [FK_rdv_Medcin]    Script Date: 03/10/2021 20:44:29 **/
ALTER TABLE [dbo].[rdv]  WITH CHECK ADD  CONSTRAINT [FK_rdv_Medcin] FOREIGN KEY([codeMedcin])
REFERENCES [dbo].[Medcin] ([codeMedcin])
GO
ALTER TABLE [dbo].[rdv] CHECK CONSTRAINT [FK_rdv_Medcin]
GO
/** Object:  ForeignKey [FK_rdv_Patient]    Script Date: 03/10/2021 20:44:29 **/
ALTER TABLE [dbo].[rdv]  WITH CHECK ADD  CONSTRAINT [FK_rdv_Patient] FOREIGN KEY([code_patient])
REFERENCES [dbo].[Patient] ([code_patient])
GO
ALTER TABLE [dbo].[rdv] CHECK CONSTRAINT [FK_rdv_Patient]
GO