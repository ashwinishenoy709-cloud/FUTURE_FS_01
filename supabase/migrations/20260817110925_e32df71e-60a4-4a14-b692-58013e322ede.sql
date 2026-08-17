DROP POLICY IF EXISTS "Authenticated users can read contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Authenticated can read messages" ON public.contact_messages;
DROP POLICY IF EXISTS "authenticated_read_contact_messages" ON public.contact_messages;
REVOKE SELECT, UPDATE, DELETE ON public.contact_messages FROM authenticated;
REVOKE SELECT ON public.contact_messages FROM anon;
GRANT ALL ON public.contact_messages TO service_role;