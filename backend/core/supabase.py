import os

from supabase import create_client, Client
from supabase.client import ClientOptions

from core.config import Settings

settings = Settings()

async def get_supabase_client():
    supabase: Client = create_client(
        settings.supabase_url,
        settings.supabase_key,
        options=ClientOptions(
            persist_session=False,
            auto_refresh_token=False,
        ),
    )
    return supabase