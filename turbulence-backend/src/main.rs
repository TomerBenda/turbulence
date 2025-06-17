use axum::{
    routing::get,
    Json, Router,
};
use serde::Serialize;
use std::net::SocketAddr;

#[derive(Serialize)]
struct Threat {
    id: u64,
    source_ip: String,
    threat_type: String,
    location: String,
    severity: u8,
}

async fn get_threats() -> Json<Vec<Threat>> {
    let dummy_data = vec![
        Threat {
            id: 1,
            source_ip: "193.169.255.1".to_string(),
            threat_type: "Port Scan".to_string(),
            location: "🇷🇺 Russia".to_string(),
            severity: 3,
        },
        Threat {
            id: 2,
            source_ip: "102.22.11.4".to_string(),
            threat_type: "DDoS".to_string(),
            location: "🇳🇬 Nigeria".to_string(),
            severity: 4,
        },
    ];
    Json(dummy_data)
}

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let app = Router::new().route("/api/threats", get(get_threats));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3001));
    tracing::debug!("listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

