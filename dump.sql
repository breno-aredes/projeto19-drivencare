--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: appointments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.appointments (
    id integer NOT NULL,
    "doctorId" integer,
    "patientId" integer,
    date date NOT NULL,
    hour time without time zone NOT NULL,
    status character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);


ALTER TABLE public.appointments OWNER TO postgres;

--
-- Name: appointments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.appointments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.appointments_id_seq OWNER TO postgres;

--
-- Name: appointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.appointments_id_seq OWNED BY public.appointments.id;


--
-- Name: doctors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctors (
    id integer NOT NULL,
    "userId" integer,
    "specialtyId" integer,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.doctors OWNER TO postgres;

--
-- Name: doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctors_id_seq OWNER TO postgres;

--
-- Name: doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctors_id_seq OWNED BY public.doctors.id;


--
-- Name: specialties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.specialties (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.specialties OWNER TO postgres;

--
-- Name: specialties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.specialties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.specialties_id_seq OWNER TO postgres;

--
-- Name: specialties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.specialties_id_seq OWNED BY public.specialties.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    type text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone,
    CONSTRAINT users_type_check CHECK ((type = ANY (ARRAY['patient'::text, 'doctor'::text])))
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: appointments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments ALTER COLUMN id SET DEFAULT nextval('public.appointments_id_seq'::regclass);


--
-- Name: doctors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors ALTER COLUMN id SET DEFAULT nextval('public.doctors_id_seq'::regclass);


--
-- Name: specialties id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialties ALTER COLUMN id SET DEFAULT nextval('public.specialties_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: appointments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.appointments (id, "doctorId", "patientId", date, hour, status, "createdAt", "updatedAt") FROM stdin;
1	3	1	2023-04-04	14:00:00	pending	2023-04-03 15:49:59.84663	\N
2	3	1	2023-04-04	14:00:00	pending	2023-04-03 15:54:06.594088	\N
3	3	1	2023-04-04	14:00:00	pending	2023-04-03 16:10:41.966917	\N
4	3	1	2023-04-04	14:00:00	pending	2023-04-03 16:10:50.840836	\N
5	3	1	2023-04-04	13:00:00	pending	2023-04-03 16:11:30.619863	\N
\.


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctors (id, "userId", "specialtyId", "createdAt") FROM stdin;
1	3	1	2023-04-02 20:13:35.761438
2	4	2	2023-04-02 20:13:35.761438
3	5	3	2023-04-03 13:12:40.409746
4	6	4	2023-04-03 13:15:04.291153
5	7	1	2023-04-03 13:17:00.770724
6	7	1	2023-04-03 13:17:31.945954
7	7	1	2023-04-03 13:18:29.636334
8	7	1	2023-04-03 13:18:58.681498
9	7	1	2023-04-03 13:41:13.299161
10	7	1	2023-04-03 13:45:00.508624
11	7	1	2023-04-03 13:45:21.126813
12	7	1	2023-04-03 13:47:43.52999
13	7	1	2023-04-03 13:48:27.29996
19	3	4	2023-04-03 14:07:22.603161
20	3	4	2023-04-03 14:07:33.906161
\.


--
-- Data for Name: specialties; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.specialties (id, name, "createdAt") FROM stdin;
1	Cardiologia	2023-04-02 20:09:43.261355
2	Neurologia	2023-04-02 20:09:43.261355
3	Ortopedia	2023-04-02 20:09:43.261355
4	Pediatria	2023-04-02 20:09:43.261355
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, type, "createdAt", "updatedAt") FROM stdin;
1	Breno	breno@teste.com	$2b$10$YHpWOxZ9Nig3ZBrYcx8okugFBrQ8I5yS7zEAwI1IPXYP673x48G9W	patient	2023-04-01 11:39:36.805762-03	\N
2	Breno	breno@teste1.com	$2b$10$H19qBBSVW7SoNk8OajlV6uHRwmIZRNyDgT11mRwI/2/lRKPfX02Y.	patient	2023-04-01 11:54:26.982175-03	\N
3	Medico 1	medico1@teste.com	$2b$10$xN6AMEno5jT/pGwmpxztI.TMoo1g6TJXw4Tta1lf2px9/gcehiN9u	doctor	2023-04-02 20:03:14.086806-03	\N
4	Medico 2	medico2@teste.com	$2b$10$ywbb93zRuC.oJ0jx/ZEzzeBAsrmIlPln9UeAyw8ia/VfiZlqlBINS	doctor	2023-04-02 20:03:24.533996-03	\N
5	Medico 3	medico3@teste.com	$2b$10$K5khoAAsRuPN4pCWcDsaL.BHUVOr/Jc7/jw4OAvB6rKVWG4Xs2he6	doctor	2023-04-03 13:11:24.877686-03	\N
6	Medico 4	medico4@teste.com	$2b$10$NDQHL6EWOy5123.Io2duR.ebM.RDJo7JowwV7iL7hWURiA9iLbHFa	doctor	2023-04-03 13:14:53.974759-03	\N
7	Medico 5	medico5@teste.com	$2b$10$OzNpUkRC.UepMdie5HFzUe6kln0bmfUWFv7olrpg3T.VfP4O/XIYe	doctor	2023-04-03 13:16:51.948332-03	\N
\.


--
-- Name: appointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.appointments_id_seq', 5, true);


--
-- Name: doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doctors_id_seq', 20, true);


--
-- Name: specialties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.specialties_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: appointments appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (id);


--
-- Name: doctors doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (id);


--
-- Name: specialties specialties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialties
    ADD CONSTRAINT specialties_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: appointments appointments_doctorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT "appointments_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES public.doctors(id);


--
-- Name: appointments appointments_patientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT "appointments_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES public.users(id);


--
-- Name: doctors doctors_specialtyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT "doctors_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES public.specialties(id);


--
-- Name: doctors doctors_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT "doctors_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

