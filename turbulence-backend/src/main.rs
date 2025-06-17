use axum::{
    routing::get,
    Json, Router,
    http::Method,
};
use serde::Serialize;
use tower_http::cors::{CorsLayer, Any};

#[derive(Serialize)]
struct Threat {
    id: u64,
    source_ip: String,
    threat_type: String,
    location: String,
    country: String,
    severity: u8,
}

async fn get_threats() -> Json<Vec<Threat>> {
    tracing::debug!("fetching threat data");
    let dummy_data = vec![
        Threat {
            id: 1,
            source_ip: "193.169.255.1".to_string(),
            threat_type: "Port Scan".to_string(),
            location: "34.0, 34.0".to_string(),
            country: "🇷🇺 Russia".to_string(),
            severity: 3,
        },
        Threat {
            id: 2,
            source_ip: "102.22.11.4".to_string(),
            threat_type: "DDoS".to_string(),
            location: "33.0, 33.0".to_string(),
            country: "🇳🇬 Nigeria".to_string(),
            severity: 4,
        },
    ];
    Json(dummy_data)
}

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods([Method::GET]);

    let app = Router::new()
        .route("/api/threats", get(get_threats))
        .layer(cors);
    let addr = "0.0.0.0:3001";

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    tracing::info!("listening on {}", addr);
    axum::serve(listener, app).await.unwrap();
}
